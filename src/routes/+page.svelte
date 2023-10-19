<script lang="ts">
    import { user } from "../lib/stores/userStore.ts";
</script>

<div class="flex flex-row gap-4 font-medium text-2xl justify-center text-slate-200 mx-4">
    <div class="text-teal-400">
        { $user?.name } 
    </div>
</div>

