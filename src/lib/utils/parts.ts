import type Dog from '$lib/interfaces/dog.interface'
import { writable } from 'svelte/store'

export const activeCollarColor = writable()
export const activeEyesColor = writable()
export const activeBodyColor = writable()
export const activeTail = writable()
export const activeEars = writable()
export const activeEyes = writable()
export const activeBreed = writable()

export let bodies = writable([{}])
export let tails = writable([{}])
export let ears = writable([{}])
export let eyes = writable([{}])
export let noses = writable([{}])
export let collars = writable([{}])
export let tongues = writable([{}])
export let manes = writable([{}])

export const name = writable()

export const dog = writable<Dog | undefined>()
