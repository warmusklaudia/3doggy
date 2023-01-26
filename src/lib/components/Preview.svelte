<script lang="ts">
  import { showPreview } from '$lib/utils/stores'
  import { X } from 'lucide-svelte'
  import DogPreview from './DogPreview.svelte'
  export let dogId: string
  export let activeTailName: string
  export let activeEarsName: string
  export let activeEyesName: string
  export let activeBodyCol: string
  export let activeEyesCol: string

  $: console.log(dogId)
</script>

<div
  class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-[2px]"
>
  <div class="bg-white p-4 rounded-lg shadow-2xl text-beta flex flex-col relative">
    <button
      on:click={() => showPreview.set(!$showPreview)}
      class="rounded-full p-2 ring-beta border-beta border hover:opacity-80 focus:outline-none focus:ring-1 self-end"
      type="button"
    >
      <X class="h-6 w-6" />
    </button>
    <DogPreview
      {activeTailName}
      {activeEarsName}
      {activeEyesName}
      {activeBodyCol}
      {activeEyesCol}
    />
  </div>
</div>
