<script lang="ts">
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'
  import { db } from '$lib/utils/useFirebase'
  import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
  import { Edit, Plus, Trash2 } from 'lucide-svelte'
  import type Dog from '$lib/interfaces/dog.interface'
  import NoDataDog from '$lib/svg/NoDataDog.svelte'

  let myDogs: Dog[] = []

  const getDogs = () => {
    const dogs = getDocs(collection(db, '3doggy', $user!.uid, 'dog'))
    dogs.then((dogs) => {
      myDogs = dogs.docs.map((dog) => dog.data() as Dog)
    })
  }
  getDogs()

  const deleteDog = async (id: string) => {
    await deleteDoc(doc(db, '3doggy', $user!.uid, 'dog', id)).then(() => {
      getDogs()
    })
  }
</script>

<svelte:head>
  <title>3Doggy | Library</title>
  <meta name="library" content="Library" />
</svelte:head>

<section class="">
  {#if myDogs.length === 0}
    <div class="flex flex-col justify-center items-center">
      <NoDataDog />
      <div class="absolute flex items-center justify-center flex-col">
        <h1 class="text-4xl pb-3">You haven't any dogs yet</h1>
        <button
          on:click={() => goto('/avatar-creator')}
          class="ml-2 mb-6 flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg "
        >
          <Plus class="mr-2" />
          Create your first doggy</button
        >
      </div>
    </div>
  {:else}
    <button
      on:click={() => goto('/avatar-creator')}
      class="ml-2 mb-6 flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg "
    >
      <Plus class="mr-2" />
      Create new dog</button
    >
    <div class="grid grid-cols-2 gap-x-10 gap-y-6 overflow-y-auto max-h-[60vh] p-2 scrollbar">
      {#each myDogs as dog}
        <div class="flex items-center bg-white rounded-md shadow-lg p-6">
          <img src={dog.img} alt={dog.breed} class="w-32 h-32 object-cover" />
          <div class="pl-4">
            <h2 class="text-lg pb-2">{dog.name}</h2>
            <div class="pb-3">
              <p>{dog.breed}</p>
              <p>Born on {dog.created}</p>
            </div>
            <div class="flex items-center gap-3">
              <button
                on:click={() => goto(`/avatar-creator/edit/${dog.id}`)}
                class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
              >
                <Edit class="mr-2" size={20} />
                Edit</button
              >
              <button
                on:click={() => deleteDog(dog.id)}
                class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
              >
                <Trash2 class="mr-2" size={20} />
                Delete</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>
