<script lang="ts">
  import { goto } from '$app/navigation'
  import type Dog from '$lib/interfaces/dog.interface'
  import { dog } from '$lib/utils/parts'
  import { user } from '$lib/utils/useAuth'
  import { db } from '$lib/utils/useFirebase'
  import { collection, getDocs } from 'firebase/firestore'
  import type { PageData } from './$types'
  export let data: PageData
  let myDogs: Dog[] = []
  let foundDog: Dog | undefined
  if ($user) {
    const dogs = getDocs(collection(db, '3doggy', $user.uid, 'dog'))
    dogs
      .then((dogs) => {
        myDogs = dogs.docs.map((dog) => dog.data() as Dog)
      })
      .then(() => {
        foundDog = myDogs.find((dog) => dog.id === data.props.id)
        if (foundDog) dog.set(foundDog)
        else goto('/avatar-creator/library')
      })
  }
</script>

{#if $dog}
  <slot />
{/if}
