<script lang="ts">
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'
  import { Loader2 } from 'lucide-svelte'

  const redirection = () => {
    if (browser) {
      if (!$user) return goto('/auth/login')
    }
  }
</script>

{#await user.known}
  <Loader2 class="animate-spin text-beta m-auto" size={30} />
{:then}
  {#if $user}
    <slot />
  {:else}
    {redirection() || ''}
  {/if}
{/await}
