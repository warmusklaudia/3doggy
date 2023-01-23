<script lang="ts">
  import { AlertTriangle, Save, X } from 'lucide-svelte'
  import { name, dog } from '$lib/utils/parts'
  import { showName } from '$lib/utils/stores'

  export let saveDog: () => void
  export let dogId: string
  let errorMessage: string = ''

  if (dogId) {
    name.set($dog?.name)
  } else {
    name.set('')
  }

  const submitForm = () => {
    if ($name === '') {
      errorMessage = 'Name is required'
    } else {
      saveDog()
      showName.set(!$showName)
    }
  }
</script>

<section
  class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-[2px]"
>
  <form
    action=""
    class="bg-beta p-4 rounded-lg shadow-2xl text-white flex flex-col relative "
    on:submit={submitForm}
  >
    <button
      on:click={() => showName.set(!$showName)}
      class="rounded-full p-1 ring-white border-white border hover:opacity-80 focus:outline-none focus:ring-1 self-end"
      type="button"
    >
      <X class="h-4 w-4" />
    </button>
    {#if errorMessage}
      <div
        class="bg-neutral-100 border gap-3 flex items-center justify-between rounded-md p-3 m-2 border-red-600 text-red-600"
      >
        <AlertTriangle />
        <p>{errorMessage}</p>
        <button
          on:click={() => (errorMessage = '')}
          class="rounded-full p-1 ring-red-600 border-red-600 border hover:bg-red-200 focus:outline-none focus:ring-1"
        >
          <X class="h-4 w-4 text-red-600" />
        </button>
      </div>
    {/if}
    <label for="name" class="block px-6 pb-3">
      <span class="block">Choose a name</span>
      <input
        type="text"
        class=" w-full mt-1 py-2 bg-transparent border rounded-md px-3 focus:border-1 focus:border-teal-400 focus:outline-none"
        placeholder="Name"
        id="name"
        bind:value={$name}
      />
    </label>
    <button
      class=" hover:bg-alpha-dark flex bg-alpha px-4 py-2 rounded-lg text-sm mt-3 mb-2  focus:ring-2 focus:ring-teal-600 focus:outline-none self-center"
      type="submit"
    >
      <Save size={22} class="mr-2" />
      Save dog
    </button>
  </form>
</section>
