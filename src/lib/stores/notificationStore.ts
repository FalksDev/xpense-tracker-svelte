import { writable } from "svelte/store";

export type NotificationType = "success" | "information" | "error";
export type NotificationObjType = {
    id: string;
    type: NotificationType;
    message: string;
}

export const notification = writable<NotificationObjType>();

export function addNotification(type: NotificationType, message: string, id: string) {
    notification.set({ type, message, id});
}

