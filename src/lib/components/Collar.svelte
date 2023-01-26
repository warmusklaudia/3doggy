<script lang="ts">
  import { darkBlue, green, red } from '$lib/utils/colors'
  import { bodies, ears, tails } from '$lib/utils/loadObjects'
  import { collars } from '$lib/utils/loadObjectsBeagle'
  import { activeCollarColor } from '$lib/utils/parts'

  const changeCollarColor = (color: string) => {
    activeCollarColor.set(color)
    $collars.map((c) => {
      //@ts-ignore
      c.collar.children.map((c) => {
        c.material.color.set(color)
      })
    })
  }
</script>

<div class="md:fixed md:inset-y-0 flex md:flex-col gap-10 justify-center mb-6 md:mb-0">
  <button
    class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
    on:click={() => changeCollarColor(darkBlue)}
  >
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="/images/body/BodyColor1.JPG"
      alt="Tail 1"
    />
    {#if $activeCollarColor === darkBlue}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button
    class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
    on:click={() => changeCollarColor(green)}
  >
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="/images/body/BodyColor2.JPG"
      alt="Tail 2"
    />
    {#if $activeCollarColor === green}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button
    class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
    on:click={() => changeCollarColor(red)}
  >
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="/images/body/BodyColor3.JPG"
      alt="Tail 3"
    />
    {#if $activeCollarColor === red}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
</div>
