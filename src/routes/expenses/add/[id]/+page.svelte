<script lang="ts">
    import { page } from "$app/stores";
    import { 
        InputText, 
        Button, 
        ExpenseTypeDropdown, 
        DatePicker,
        InputNumber } from "$lib/components/ui";
    import type { ExpenseType } from "@prisma/client";
    import addExpenseStore from "./add-expense.store";
    import { addNotification } from "$lib/stores/notificationStore";
    import { createId } from "@paralleldrive/cuid2";
    import { goto } from "$app/navigation";
    import { get } from "svelte/store";

    let expenseLabel: string;
    let expenseCost: number;
    let expenseType: ExpenseType;
    let expenseDate: Date;

    $: addExpenseStore.setId($page.params.id);
    $: addExpenseStore.setLabel(expenseLabel);
    $: addExpenseStore.setSek(expenseCost);
    $: addExpenseStore.setType(expenseType);
    $: addExpenseStore.setDate(expenseDate);

    async function addExpense(event: { currentTarget: EventTarget & HTMLFormElement }) {
        const expense = get(addExpenseStore);
        const _ = await fetch(event.currentTarget.action, {
            method: "POST",
            body: JSON.stringify(expense)
        });

        addNotification("success", `Expense ${expense.label} created!`, createId());
        goto("/expenses", { replaceState: false });
    }
</script>

<div class="w-full px-[10px] flex flex-col gap-3 font-medium">
    <div class="flex flex-col gap-1">
        <span class="ml-2 text-lg text-teal-500">Expense label</span>
        <InputText bind:value={expenseLabel} label="Enter a label for the expense" />
    </div>
    <div class="flex flex-col gap-1">
        <span class="ml-2 text-lg text-teal-500">Expense cost</span> 
        <InputNumber bind:value={expenseCost} label="Enter a cost for the expense (SEK)" />
    </div>
    <div>
        <span class="ml-2 text-lg text-teal-500">Expense type</span>
        <ExpenseTypeDropdown bind:selectedType={expenseType} />
    </div>
    <div>
        <span class="ml-2 text-lg text-teal-500">Expense date</span>
        <DatePicker bind:date={expenseDate}/>
    </div>
    <div class="mt-2 border-t-[1px] border-neutral-700/75">
        <form method="post" on:submit|preventDefault={addExpense}>
            <Button type="submit" label="Add" styleClass="w-full mt-2" />
        </form>
    </div>
</div>
