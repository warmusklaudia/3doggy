<script lang="ts">
  import { goto } from '$app/navigation'
  import { AlertTriangle, Loader2, Plus, X } from 'lucide-svelte'
  import { user } from '$lib/utils/useAuth'
  import { onMount } from 'svelte'
  import { collection, getDocs } from 'firebase/firestore'
  import type Dog from '$lib/interfaces/dog.interface'
  import { db, storage } from '$lib/utils/useFirebase'
  import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
  import { updatePassword } from 'firebase/auth'

  let myDogs: number = 0
  let pic: string = ''

  const storageRef = ref(storage, $user?.uid)

  const getDogs = async () => {
    const dogs = await getDocs(collection(db, '3doggy', $user!.uid, 'dog'))
    myDogs = dogs.docs.map((dog) => dog.data() as Dog).length
  }
  onMount(() => {
    getImg()
    getDogs()
  })

  const uploadPic = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0]

    uploadBytes(storageRef, file as Blob)
      .then(() => {
        getImg()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getImg = async () => {
    await getDownloadURL(storageRef)
      .then((link) => {
        pic = link
      })
      .catch(() => {
        pic = ''
      })
  }
</script>

<svelte:head>
  <title>3Doggy | Profile</title>
  <meta name="profile" content="Profile" />
</svelte:head>

<section class="flex flex-col justify-center items-center mb-6 md:mb-0">
  {#if !pic}
    <img class="rounded-full w-60 h-60" src="/DefaultProfile.jpg" alt="Default profile" />
  {:else}
    <img class="rounded-full w-60 h-60 object-cover" src={pic} alt="Default profile" />
  {/if}
  <label for="uploadPic">
    <div
      type="input"
      class="bg-beta -mt-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:opacity-80 focus:ring-2 focus:ring-alpha-dark focus:outline-none"
    >
      <p class="text-sm text-white md:text-xl ">
        <Plus size={24} />
      </p>
      <input class="hidden" id="uploadPic" type="file" accept="image/*" on:change={uploadPic} />
    </div>
  </label>
  <h2 class="py-3 text-beta text-lg">{$user?.email}</h2>
  <h2 class="pb-3 text-beta">You have {myDogs} dogs in your library</h2>
  <button
    on:click={() => goto('/avatar-creator/library')}
    class="text-white hover:bg-alpha-dark bg-alpha px-4 py-2 rounded-lg  focus:ring-2 focus:ring-alpha-dark focus:outline-none"
  >
    Go to my library</button
  >
</section>
