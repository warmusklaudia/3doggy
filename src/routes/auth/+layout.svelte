<script lang="ts">
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'
  import { Loader2 } from 'lucide-svelte'

  const redirection = () => {
    if ($user) return goto('/')
  }
</script>

{#await user.known}
  <Loader2 class="animate-spin text-beta m-auto" size={30} />
{:then}
  {#if $user}
    {redirection() || ''}
  {:else}
    <slot />
  {/if}
{/await}
