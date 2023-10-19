<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let label: string = "";
    export let styleClass: string = "";
    
    const dispatch = createEventDispatcher();
</script>

<button
    on:click={() => dispatch("click")}
    class="
        p-[10px] 
        rounded-full 
        bg-teal-700 
        font-medium 
        hover:bg-teal-800 
        duration-100
        focus:ring
        focus:ring-teal-600
        focus:outline-none
        {styleClass}">
    <span>{label}</span>
</button>
