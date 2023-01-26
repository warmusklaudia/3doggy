import { writable } from 'svelte/store'

export const showName = writable(false)
export const showDelete = writable(false)
export const showPreview = writable(false)
export const loadingObjects = writable(false)
