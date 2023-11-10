import expenseRepository from "$lib/server/database/expense.repository"
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
    const session = await event.locals.getSession();
    if(!session?.user) throw redirect(303, "/auth");

    const data = await expenseRepository.getExpenses(session.user.id);

    return {
        expenses: JSON.parse(JSON.stringify(data))
    }
}

export const actions = {
    delete: async (event) => {
        const session = await event.locals.getSession();
        if(!session?.user) throw redirect(303, "/auth");

        const body = (await event.request.json()) as { id: string }

        const expense = await expenseRepository.getSingleExpense(body.id);
        if(expense?.createdById != session.user.id) {
            throw error(407);
        }

        await expenseRepository.deleteExpense(body.id);
    }
}
