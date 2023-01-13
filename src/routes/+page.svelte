<script>
  import doggy from '$lib/images/pngwing.png'
  import { restoreUser, user } from '$lib/utils/useAuth'
  import { onMount } from 'svelte'
  $: console.log(user)
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="3Doggy Home" />
</svelte:head>

<section
  class="flex flex-col-reverse  sm:flex-row sm:justify-around lg:justify-between items-center pt-10"
>
  <div class="flex flex-col gap-6 max-w-sm ">
    <h1>Hello {user?.email}</h1>
    <h3 class="italic text-lg">
      "Everyone thinks they have the best dog, and none of them are wrong." - Unknown
    </h3>
    <h2 class="text-xl">Make your life better and create your canine friend in 3D!</h2>
    <a class="text-white text-center bg-alpha p-3 rounded-lg w-2/3" href="/avatar-creator">
      Make your own doggy</a
    >
  </div>
  <img class="w-1/4 pb-6 sm:pb-0" src={doggy} alt="dog" />
</section>
