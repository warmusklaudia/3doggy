<script lang="ts">
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'
  import { db } from '$lib/utils/useFirebase'
  import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
  import { Edit, Eye, Plus, Trash2 } from 'lucide-svelte'
  import type Dog from '$lib/interfaces/dog.interface'
  import NoDataDog from '$lib/svg/NoDataDog.svelte'
  import { showDelete, showPreview } from '$lib/utils/stores'
  import DeleteDog from '$lib/components/DeleteDog.svelte'
  import { onMount } from 'svelte'
  import Preview from '$lib/components/Preview.svelte'

  let myDogs: Dog[] = []
  let id: string
  let name: string
  let eyes: string = ''
  let ears: string = ''
  let tail: string = ''
  let bodyColor: string = ''
  let eyesColor: string = ''

  const getDogs = async () => {
    const dogs = await getDocs(collection(db, '3doggy', $user!.uid, 'dog'))
    myDogs = dogs.docs.map((dog) => dog.data() as Dog)
  }
  onMount(() => {
    getDogs()
  })

  const deleteDog = async (id: string) => {
    await deleteDoc(doc(db, '3doggy', $user!.uid, 'dog', id)).then(() => {
      getDogs()
      showDelete.set(!$showDelete)
    })
  }
</script>

<svelte:head>
  <title>3Doggy | Library</title>
  <meta name="library" content="Library" />
</svelte:head>

<section class="">
  {#if $showDelete}
    <DeleteDog {deleteDog} dogId={id} {name} />
  {/if}
  {#if $showPreview}
    <Preview
      activeBodyCol={bodyColor}
      activeEarsName={ears}
      activeEyesCol={eyesColor}
      activeEyesName={eyes}
      activeTailName={tail}
    />
  {/if}
  {#await getDogs()}
    <div
      class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-6 overflow-y-auto max-h-[70vh] lg:max-h-[60vh] p-2"
    >
      {#each [1, 2, 3, 4] as _}
        <div
          class="flex items-center rounded-md shadow-lg bg-neutral-400 animate-pulse w-full h-44"
        />
      {/each}
    </div>
  {:then}
    {#if myDogs.length !== 0}
      <button
        on:click={() => goto('/avatar-creator')}
        class="ml-2 mb-6 flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-alpha-dark focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg "
      >
        <Plus class="mr-2" />
        Create new dog</button
      >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-6 overflow-y-auto max-h-[70vh] lg:max-h-[60vh] p-2 scrollbar"
      >
        {#each myDogs as dog}
          <div class="flex items-center bg-white rounded-md shadow-lg p-3 lg:p-6 mr-1 md:mr-2">
            <img src={dog.img} alt={dog.breed} class="w-24 h-24 md:w-32 md:h-32 object-cover" />
            <div class="pl-4">
              <h2 class="text-lg pb-2">{dog.name}</h2>
              <div class="pb-3">
                <p>{dog.breed}</p>
                <p>Born on {dog.created}</p>
              </div>
              <div class="flex items-center justify-evenly gap-3">
                <button
                  title="Preview"
                  class="text-xs md:text-sm flex items-center hover:opacity-80 focus:ring-2 focus:ring-alpha focus:outline-none  text-white text-center bg-beta p-3 rounded-full "
                  on:click={() => {
                    showPreview.set(!$showPreview)
                    id = dog.id
                    eyes = dog.eyes
                    ears = dog.ears
                    tail = dog.tail
                    bodyColor = dog.bodyColor
                    eyesColor = dog.eyesColor
                  }}
                >
                  <Eye size={20} />
                </button>
                <button
                  title="Edit"
                  on:click={() => goto(`/avatar-creator/edit/${dog.id}`)}
                  class="text-xs md:text-sm flex items-center hover:opacity-80 focus:ring-2 focus:ring-alpha focus:outline-none  text-white text-center bg-beta p-3 rounded-full "
                >
                  <Edit size={20} />
                </button>
                <button
                  title="Delete"
                  on:click={() => {
                    showDelete.set(!$showDelete)
                    id = dog.id
                    name = dog.name
                  }}
                  class="text-xs md:text-sm flex items-center hover:opacity-80 focus:ring-2 focus:ring-alpha focus:outline-none  text-white text-center bg-beta p-3 rounded-full "
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="flex flex-col justify-center items-center">
        <NoDataDog />
        <div class="absolute flex items-center justify-center flex-col">
          <h1 class="text-2xl sm:text-4xl pb-3 font-cormorant font-bold">
            You don't have any dogs yet
          </h1>
          <button
            on:click={() => goto('/avatar-creator')}
            class="text-sm sm:text-base ml-2 mb-6 flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-alpha-dark focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg "
          >
            <Plus class="mr-2" />
            Create your first doggy</button
          >
        </div>
      </div>
    {/if}
  {/await}
</section>
