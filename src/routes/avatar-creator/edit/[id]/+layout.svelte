<script lang="ts">
  import type Dog from '$lib/interfaces/dog.interface'
  import { dog } from '$lib/utils/parts'
  import { user } from '$lib/utils/useAuth'
  import { db } from '$lib/utils/useFirebase'
  import { collection, getDocs } from 'firebase/firestore'
  import { writable } from 'svelte/store'
  import type { PageData } from './$types'
  export let data: PageData
  let myDogs: Dog[] = []
  let foundDog: Dog | undefined
  console.log(data.props.id)
  if ($user) {
    const dogs = getDocs(collection(db, '3doggy', $user.uid, 'dog'))
    dogs
      .then((dogs) => {
        myDogs = dogs.docs.map((dog) => dog.data() as Dog)
      })
      .then(() => {
        foundDog = myDogs.find((dog) => dog.id === data.props.id)
        dog.set(foundDog)
      })
  }
</script>

{#if foundDog}
  <slot />
  <!-- TODO: NOT FOUND -->
{/if}
