<script lang="ts">
    import type { Expense } from "@prisma/client";
    import dayjs from 'dayjs';
    import ExpenseTypeTag from "../ui/ExpenseTypeTag.svelte";
    import { addNotification } from "$lib/stores/notificationStore";
    import { createId } from "@paralleldrive/cuid2";
    import { invalidateAll } from "$app/navigation";
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    export let expense: Expense;
    let showDelete: boolean = false;

    async function deleteExpense(event: { currentTarget: EventTarget & HTMLFormElement }) {
        await fetch(event.currentTarget.action, {
            method: "POST",
            body: JSON.stringify({ id: expense.id })
        });

        await invalidateAll();
        addNotification("success", `Expense ${expense.label} deleted!`, createId());
    }
</script>

<div class="relative flex flex-row gap-2 w-full p-[10px] px-[20px] bg-neutral-900 rounded-full justify-between 
            cursor-pointer md:hover:bg-teal-600/50 md:duration-100" 
on:click={() => showDelete = showDelete ? false : true}>
    <div class="flex flex-col gap-1">
        <span class="text-[16px] font-medium w-[200px] md:w-[500px] truncate ...">{expense.label}</span>
        <span class="text-[12px] font-medium text-neutral-500">{dayjs(expense.date).format("YYYY-DD-MM HH:mm:ss")}</span>
    </div>
    <div class="flex flex-col float-right w-[85px] md:flex-row md:w-auto md:gap-4 md:my-auto">
    <div>
        <ExpenseTypeTag type={expense.type} />
    </div>
        <div class="flex flex-row gap-1">
            <span class="text-[16px] font-semibold text-teal-600">{(Math.round(+expense.sek * 100) / 100).toFixed(2)}</span>
            <span class="text-[16px] font-semibold text-teal-600">SEK</span>
        </div>
    </div>
</div>
{#if showDelete}
    <div 
    in:scale|global={{ duration: 200, delay: 0, opacity: 0.5, start: 0.5, easing: quintOut }}
    out:scale|global={{ duration: 100, delay: 0, opacity: 0.5, start: 0, easing: quintOut }}
    class="w-75 mx-auto bg-red-600/25 py-2 px-5 rounded-full" >
        <form method="post" action="?/delete" on:submit|preventDefault={deleteExpense}>
            <button type="submit" class="font-semibold text-center">Delete</button>
        </form>
    </div>
{/if}
