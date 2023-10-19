<script>
    import { Button } from "$lib/components/ui";
    import { goto } from "$app/navigation";
    import { createId } from "@paralleldrive/cuid2";

    function gotoAddNewExpese() {
        const id = createId();
        goto(`expenses/add/${id}`, { replaceState: false });
    }
</script>

<div class="mx-2">
    <Button styleClass="w-full" label="Add expense" on:click={gotoAddNewExpese} />
</div>
