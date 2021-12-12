import { writable } from 'svelte/store';

export const count = writable<number>(0);
export const isHome = writable<boolean>(false);
