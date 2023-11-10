<script lang="ts">
    export let value: number;
    export let label: string = "";

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="w-full flex flex-row py-[10px] px-[20px] font-medium bg-neutral-700/75 rounded-full focus:bg-neutral-600">
    <input
        class="outline-none w-full bg-transparent text-neutral-200 placeholder-neutral-400" 
        placeholder={label}
        on:change={() => dispatch("change", { value })}  bind:value={value} type="number" />
</div>
