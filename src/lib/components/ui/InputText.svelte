<script lang="ts">
    export let value: string = "";
    export let label: string = "";

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="w-full flex flex-row bg-zinc-200 py-[10px] px-[20px] font-medium bg-neutral-700/75 rounded-full focus:bg-neutral-600">
    <input
        class="outline-none w-full bg-transparent text-neutral-200 placeholder-neutral-400" 
        placeholder={label}
        on:change={() => dispatch("change", { value })}  value={value} type="text" />
</div>

