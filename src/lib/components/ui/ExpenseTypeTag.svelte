<script lang="ts">
    import { ExpenseType } from "@prisma/client";

    export let type: ExpenseType;
    $: typeString = ExpenseType[type];
</script>

<div class="relative w-full">
    <div class="absoulte p-[3px] px-[5px] bg-teal-700/50 text-center rounded-full text-[12px] font-semibold">
        {typeString}
    </div>
</div>
