<script lang="ts">
  import { showDelete } from '$lib/utils/stores'
  import { Trash2, X } from 'lucide-svelte'
  export let deleteDog: (id: string) => Promise<void>
  export let dogId: string
  export let name: string
</script>

<div
  class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-[2px]"
>
  <div class="bg-beta bg-opacity-90 p-4 rounded-lg shadow-2xl text-white flex flex-col relative">
    <button
      on:click={() => showDelete.set(!$showDelete)}
      class="rounded-full p-1 ring-white border-white border hover:opacity-80 focus:outline-none focus:ring-1 self-end"
      type="button"
    >
      <X class="h-4 w-4" />
    </button>
    <h2 class="py-3 px-4 font-cormorant text-lg font-medium w-64 text-center">
      Are you sure you want to delete {name}?
    </h2>
    <button
      class=" hover:bg-alpha-dark flex bg-alpha px-4 py-2 rounded-lg text-sm mt-3 mb-2  focus:ring-2 focus:ring-alpha-dark focus:outline-none self-center"
      on:click={() => deleteDog(dogId)}
    >
      <Trash2 size={22} class="mr-2" />
      Delete dog
    </button>
  </div>
</div>
