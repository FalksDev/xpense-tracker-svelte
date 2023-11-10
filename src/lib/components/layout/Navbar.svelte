<script lang="ts">
    import { page } from '$app/stores';
    import { signOut } from "@auth/sveltekit/client";
    import LogOutIcon from "virtual:icons/lucide/log-out"
    import MenuIcon from "virtual:icons/lucide/menu";
    import CloseMenyIcon from "virtual:icons/lucide/badge-x";

    const activatedRouteClass: string = "bg-teal-600 text-white";
    let showResponsiveMenu: boolean = false;

    function toggleResponsiveMenu() {
        if(showResponsiveMenu) {
            showResponsiveMenu = false;
            return;
        }

        showResponsiveMenu = true;
    }
</script>

<div class="w-full text-center md:text-start h-[60px] bg-neutral-900 flex flex-row justify-between px-4 border-b-2 border-teal-200/25">
    <div class="font-semibold text-[18px] text-white my-auto">XPENSE Tracker</div>

    <div class="hidden md:flex md:flex-row gap-1 md:gap-2 text-teal-600 font-medium my-auto">
        <a  
            href="/" 
            class="
                    hover:text-white 
                    rounded-full
                    duration-100
                    px-[10px] 
                    py-[5px] 
                    {$page.url.pathname == '/' ? activatedRouteClass : ''}">Dashboard</a>
        <a 
            href="/expenses" 
            class="
                hover:text-white 
                rounded-full 
                duration-100
                px-[10px] 
                py-[5px] {$page.url.pathname == '/expenses' ? activatedRouteClass : ''}">Expenses</a>
        <a
            href="/about" 
            class="
                hover:text-white 
                rounded-full 
                duration-100
                px-[10px] 
                py-[5px]
                {$page.url.pathname == '/about' ? activatedRouteClass : ''}">About</a>
    </div>

    <div
    class="my-auto hidden md:block"
    on:click={() => {
        signOut({
            callbackUrl: "/"
        })}}>
        <LogOutIcon class="hover:cursor-pointer hover:text-teal-600 my-auto mx-auto text-[18px] text-slate-200" />
    </div>

    <div class="my-auto block md:hidden" on:click={() => toggleResponsiveMenu()}>
        {#if !showResponsiveMenu}
            <MenuIcon class="mt-2 mb-2 hover:cursor-pointer hover:text-teal-600 my-auto mx-auto text-[18px] text-slate-200" />
        {:else}
            <CloseMenyIcon class="mt-2 mb-2 hover:cursor-pointer hover:text-teal-600 my-auto mx-auto text-[18px] text-slate-200" />
        {/if}
    </div>
    {#if showResponsiveMenu} 
        <div class="z-50 pt-2 px-[10px] absolute top-[60px] text-slate-200 bg-neutral-900 w-full left-0 flex flex-col gap-1 font-medium">
        <a  
            on:click={() => {
                toggleResponsiveMenu();
            }} 
            href="/" 
            class="
                    text-teal-600
                    hover:text-white 
                    rounded-full
                    duration-100
                    px-[10px] 
                    py-[5px] 
                    {$page.url.pathname == '/' ? activatedRouteClass : ''}">Dashboard</a>
        <a 
            on:click={() => {
                toggleResponsiveMenu();
            }}
            href="/expenses" 
            class="
                text-teal-600
                hover:text-white 
                rounded-full 
                duration-100
                px-[10px] 
                py-[5px] {$page.url.pathname == '/expenses' ? activatedRouteClass : ''}">Expenses</a>
        <a
            on:click={() => {
                toggleResponsiveMenu();
            }}
            href="/about" 
            class="
                text-teal-600
                hover:text-white 
                rounded-full 
                duration-100
                px-[10px] 
                py-[5px]
                {$page.url.pathname == '/about' ? activatedRouteClass : ''}">About</a>


        <div
            on:click={() => toggleResponsiveMenu()}
            class="my-auto mb-2"
            on:click={() => {
                signOut({
                    callbackUrl: "/"
                })}}>
                <LogOutIcon class="hover:cursor-pointer hover:text-teal-600 my-auto mx-auto text-[18px] text-slate-200" />
        </div>

        </div>
    {/if}
</div>
