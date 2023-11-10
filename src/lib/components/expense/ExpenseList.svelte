<script lang="ts">
    import type { Expense } from "@prisma/client";
    import { ExpenseListItem } from ".";

    export let expenses: Expense[];
</script>

<div class="flex flex-col gap-2 mt-2 h-[calc(100vh-150px)] overflow-y-scroll md:overflow-auto">
    {#each expenses as expense }
        <ExpenseListItem expense={expense} />
    {/each}
</div>
