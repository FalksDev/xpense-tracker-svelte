<script lang="ts">
    import { DateInput } from "date-picker-svelte";

    export let date: Date = new Date();
</script>

<DateInput format={"yyyy-MM-dd"} bind:value={date} />

<style>
    :root {
        --date-picker-background: #525252;
        --date-picker-foreground: #e5e5e5;
        --date-input-width: 100%
    }
</style>
