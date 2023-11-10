import { writable } from "svelte/store";
import type { ExpenseType } from "@prisma/client";

export type AddExpenseType = {
    id: string;
    label: string;
    date: Date;
    type: ExpenseType;
    sek: number;
}

export const addExpenseStore = () => {
    const { subscribe, update } = writable<AddExpenseType>();

    const methods = {
        setId(id: string) {
           update(old => ({ ...old, id })); 
        },
        
        setLabel(label: string) {
            update(old => ({ ...old, label }));
        },

        setType(type: ExpenseType){
            update(old => ({ ...old, type }));
        },
        
        setSek(sek: number){
            update(old => ({ ...old, sek }))
        },
        setDate(date: Date) {
            update(old => ({ ...old, date }))
        }
    };

    return {
        subscribe,
        ...methods
    }
}

export default addExpenseStore();

