import { writable } from "svelte/store";

type User = {
    name: string;
    email: string;
}

export const user = writable<User>();
