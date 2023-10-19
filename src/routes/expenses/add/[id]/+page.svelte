<script lang="ts">
    import { page } from "$app/stores";
    import { InputText } from "$lib/components/ui";

    let expenseLabel: string;
    let expenseId: string;

    $: {
        expenseId = $page.params.id;
    }
</script>

<div class="w-full px-[10px] flex flex-col gap-3">
    <div class="flex flex-col gap-1 font-medium">
        <span class="ml-2 text-lg text-teal-500">Expense label</span>
        <InputText value={expenseLabel} label="Enter a label for the expense" />
    </div>
</div>
