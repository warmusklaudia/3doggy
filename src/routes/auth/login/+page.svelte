<script lang="ts">
  import { user } from '$lib/utils/useAuth'

  $: console.log(user)
</script>

<svelte:head>
  <title>Login</title>
  <meta name="login" content="Log in to your account" />
</svelte:head>

<div class="gap-6 flex items-center flex-col bg-beta opacity-90  text-white">
  <h1 class="text-3xl">Log in</h1>
</div>
