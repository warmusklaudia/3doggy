<script lang="ts">
  import { onMount } from 'svelte'
  import type { User } from 'firebase/auth'
  import { auth } from '$lib/utils/useFirebase'
  import AvatarCreator from '../../routes/avatar-creator/+page.svelte'

  let user: User | null = null

  onMount(async () => {
    user = await auth.currentUser
  })

  export let Wrapped = AvatarCreator
</script>

{#if user}
  <svelte:component this={Wrapped} />
{:else}
  <h1>You are not authenticated, please login</h1>
{/if}
