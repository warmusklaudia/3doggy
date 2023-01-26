<script lang="ts">
  import { activeBreed, activeCollarColor, dog } from '$lib/utils/parts'
  import Dog from '../../../../lib/components/Dog.svelte'
  import {
    activeTail,
    activeEars,
    activeEyes,
    activeBodyColor,
    activeEyesColor,
  } from '$lib/utils/parts'
  import { readable } from 'svelte/store'
  $: {
    activeTail.set($dog!.tail)
    activeEars.set($dog!.ears)
    activeEyes.set($dog!.eyes)
    activeBodyColor.set($dog!.bodyColor)
    activeEyesColor.set($dog!.eyesColor)
    activeCollarColor.set($dog!.collarColor)
    activeBreed.set($dog!.breed)
  }

  let breedX: any

  const createBreedStore = () => {
    const { subscribe } = readable<string | null>(undefined, (set) => set($dog!.breed))

    const known = new Promise<void>((resolve) => {
      let unsub = () => {}
      unsub = subscribe((breed) => {
        if (breed !== undefined) {
          resolve()
          unsub()
        }
      })
    })

    return { subscribe, known }
  }

  $: breedX = $dog?.breed
  $: console.log(breedX)

  export const breed = createBreedStore()

  $: breed.subscribe((breed) => {
    activeBreed.set(breed)
  })
  $: console.log($breed)

  console.log($dog)
</script>

<svelte:head>
  <title>3Doggy | Edit</title>
  <meta name="edit" content="Avatar editing" />
</svelte:head>
{#if !breedX}
  <p>Loading</p>
{:else if breedX === 'Shiba'}
  <section class="flex justify-center items-center">
    <Dog dogId={$dog?.id} breed={'Shiba'} />
  </section>
{:else if breedX === 'Beagle'}
  <section class="flex justify-center items-center">
    <Dog dogId={$dog?.id} breed={'Beagle'} />
  </section>
{/if}
