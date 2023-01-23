import type Dog from '$lib/interfaces/dog.interface'
import { writable } from 'svelte/store'

export const activeEyesColor = writable()
export const activeBodyColor = writable()
export const activeTail = writable()
export const activeEars = writable()
export const activeEyes = writable()

export const dog = writable<Dog | undefined>()
