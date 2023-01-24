<script lang="ts">
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'

  const redirection = () => {
    if (browser) {
      if (!$user) return goto('/auth/login')
    }
  }
</script>

{#await $user}
  <p>Loading...</p>
{:then user}
  {#if user}
    <slot />
  {:else}
    {redirection() || ''}
  {/if}
{/await}
