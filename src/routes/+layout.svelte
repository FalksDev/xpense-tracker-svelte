<script>
    import "../app.postcss";
    import { page } from '$app/stores';
    import { Navbar } from '$lib/components/layout';
    import { user } from "../lib/stores/userStore.ts";

  $: {
      const initialUser = $page.data.session?.user;
      if(initialUser) {
          user.set({ name: initialUser.name ?? "", email: initialUser.email ?? "" });
        }
    }
</script>

<div>
    <Navbar />
    <div class="w-full min-h-[calc(100vh-60px)] bg-neutral-800 pt-2 flex flex-row justify-center">
        <div class="w-full md:w-[50%] break-words text-slate-200">
            <slot />
        </div>
    </div>
</div>
