<script>
    import { Button } from "$lib/components/ui";

    function apa() {
        console.log("APA");
    }
</script>

<div class="mx-2">
    <Button styleClass="w-full" label="Create expense" on:click={apa} />
</div>
