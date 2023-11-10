import { error, redirect } from "@sveltejs/kit";
import type { AddExpenseType } from "./add-expense.store";
import expenseRepository from "$lib/server/database/expense.repository";

export const actions = {
    default: async (event) => {
        const session = await event.locals.getSession();
        if(!session?.user) throw redirect(303, "/auth");

        const body = (await event.request.json()) as AddExpenseType;

        const expense = await expenseRepository.createExpense(
            body.id,
            body.label,
            body.date,
            body.type,
            body.sek,
            session.user.id
        );

        if(!expense) throw error(500, "Could not create the expense.");
    }
}
