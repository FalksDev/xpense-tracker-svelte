<script lang="ts">
    import { notification, type NotificationObjType } from "$lib/stores/notificationStore";
	import { fade } from "svelte/transition";
    import CloseMenyIcon from "virtual:icons/lucide/badge-x";
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    function addToList(item: NotificationObjType) {
        list = [...list, item];

        setTimeout(() => {
            list.shift();
            list = list;
        }, 3000);
    }

    function removeFromList(id: string) {
        list = list.filter(i => i.id !== id);
    }
    
    let list: NotificationObjType[] = [];

    $: addToList($notification);
    
</script>

<div class="absolute md:w-[50%] md:left-0 md:right-0 md:mx-auto w-full px-2 left-0 bottom-[10px]">
    <div class="relative flex flex-col gap-1">
        {#each list as item }
        {#if item?.message }
        <div 
        in:scale|global={{ duration: 400, delay: 0, opacity: 0.5, start: 0.5, easing: quintOut }}
        out:fade|global={{ delay: 250, duration: 300 }}
        class="
        p-[10px] bg-teal-600/50 rounded-md text-neutral-200 
        font-medium flex flex-row justify-between border-[1px] border-green-400/25">
            <div class="flex flex-col">
                <span class="text-green-500 text-[14px]">{item.type}</span>
                <span>{item.message}</span>
            </div>
            <div class="my-auto cursor-pointer hover:text-teal-600 duration-200" on:click={() => removeFromList(item.id)}>
                <CloseMenyIcon />
            </div>
        </div>
        {/if}
        {/each}
    </div>
</div>    

