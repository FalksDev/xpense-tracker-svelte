<script lang="ts">
    import { Button } from "$lib/components/ui";
    import { goto } from "$app/navigation";
    import { createId } from "@paralleldrive/cuid2";
    import type { PageServerData } from "./$types";
    import { ExpenseList } from "$lib/components/expense";

    export let data: PageServerData;

    function gotoAddNewExpese() {
        const id = createId();
        goto(`expenses/add/${id}`, { replaceState: false });
    }
</script>

<div class="mx-2">
    <Button styleClass="w-full" label="Add expense" on:click={gotoAddNewExpese} />
    <div class="flex flex-col">
        <ExpenseList expenses={data.expenses} />
    </div>
</div>
