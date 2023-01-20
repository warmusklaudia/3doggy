<script lang="ts">
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'

  const redirection = () => {
    if ($user) return goto('/')
  }
</script>

{#await $user}
  <p>Loading...</p>
{:then user}
  {#if user}
    {redirection() || ''}
  {:else}
    <slot />
  {/if}
{/await}
