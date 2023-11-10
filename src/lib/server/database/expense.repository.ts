import type { ExpenseType } from "@prisma/client";
import { db } from "./db.server";


const expenseRepository = () => {
    const methods = {
        async createExpense(id: string, label: string, date: Date, type: ExpenseType, sek: number, createdById: string) {
            return await db.expense.create({
                data: {
                    id,
                    label,
                    date,
                    type,
                    sek,
                    createdWhen: new Date(),
                    createdById: createdById
                }
            });
        },
        async getExpenses(userId: string) {
            return await db.expense.findMany({
                where: { createdById: userId },
                orderBy: { date: "desc" }
            });
        },
        async deleteExpense(id: string) {
            return await db.expense.delete({ 
                where: { id: id } 
            });
        },
        async getSingleExpense(id: string) {
            return await db.expense.findUnique({
                where: { id: id }
            });
        }
    }

    return {
        ...methods
    }
}


export default expenseRepository(); 
