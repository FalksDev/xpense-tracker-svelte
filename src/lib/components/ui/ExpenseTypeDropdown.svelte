<script lang="ts">
    import { ExpenseType } from "@prisma/client";
    type DropdownType = {
        label: string;
        value: ExpenseType;
    }

    const types: DropdownType[] = [
        { value: ExpenseType.CAR, label: "Cars" },
        { value: ExpenseType.SNUS, label: "Snus" },
        { value: ExpenseType.PET, label: "Pets" },
        { value: ExpenseType.FUEL, label: "Fuel" },
        { value: ExpenseType.CANDY, label: "Candy" },
        { value: ExpenseType.OTHER, label: "Other" },
        { value: ExpenseType.GROCERY, label: "Groceries" },
        { value: ExpenseType.CLOTHING, label: "Clothing" },
        { value: ExpenseType.FASTFOOD, label: "Fast food/Restaurant" },
        { value: ExpenseType.INSURENCE, label: "Insurence" },
        { value: ExpenseType.ELECTRONIC, label: "Electronics" },

    ].sort((a, b) => a.label.localeCompare(b.label));

    export let selectedType: ExpenseType;
</script>


<select id="countries"
bind:value={selectedType}
class="bg-neutral-600 border border-neutral-800 text-neutral-200 text-md rounded-full
font-medium focus:ring-blue-500 focus:border-blue-500 block w-full p-[10px]">
    {#each types as type}
        <option value={type.value} class="text-md text-neutral-200 font-medium">{type.label}</option>
    {/each}
</select>
