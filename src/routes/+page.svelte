<script>
  import doggy from '$lib/images/pngwing.png'
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="3Doggy Home" />
</svelte:head>

<section class="flex justify-between items-center">
  <div class="flex flex-col gap-6 max-w-sm">
    <h3 class="italic text-lg">
      "Everyone thinks they have the best dog, and none of them are wrong." - Unknown
    </h3>
    <h2 class="text-xl">Make your life better and create your canine friend in 3D!</h2>
    <a class="text-white text-center bg-alpha p-3 rounded-lg w-2/3" href="/">
      Make your own doggy</a
    >
  </div>
  <img class="w-1/4" src={doggy} alt="dog" />
</section>
