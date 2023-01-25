<script lang="ts">
  import { goto } from '$app/navigation'
  import { user } from '$lib/utils/useAuth'
  import type { User } from 'firebase/auth'
  $: console.log(user)
  let userValue: User | null = null
  user.subscribe((value) => {
    userValue = value
  })
</script>

<svelte:head>
  <title>3Doggy | Home</title>
  <meta name="description" content="3Doggy Home" />
</svelte:head>

<section
  class="flex flex-col-reverse  sm:flex-row sm:justify-around lg:justify-between items-center pt-10"
>
  <div class="flex flex-col gap-6 max-w-sm items-center sm:items-start">
    <h3 class="italic text-2xl font-cormorant font-medium">
      "Everyone thinks they have the best dog, and none of them are wrong." - Unknown
    </h3>
    <h2 class="text-xl">Make your life better and create your canine friend in 3D!</h2>
    <button
      on:click={() => goto('/avatar-creator')}
      class="text-sm sm:text-base hover:bg-alpha-dark focus:ring-2 focus:ring-alpha-dark focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg w-2/3"
    >
      Make your own doggy</button
    >
  </div>
  <img class="w-1/3 sm:w-1/4 pb-6 sm:pb-0" src="/pngwing.png" alt="dog" />
</section>
