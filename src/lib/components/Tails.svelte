<script lang="ts">
  import { Scene } from 'three'
  import { activeTail } from '$lib/utils/parts'

  export let changeTail: Function
  export let scene: Scene

  const setActive = (name: string) => {
    scene.children.map((c) => {
      if (c.name === name) {
        activeTail.set(c.name)
      }
    })
  }
</script>

<div class="md:fixed md:inset-y-0 flex md:flex-col gap-10 justify-center mb-6 md:mb-0">
  <button on:click={() => changeTail('tail1')} on:click={() => setActive('tail1')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/tails/Tail1.JPG"
      alt="Tail 1"
    />
    {#if $activeTail === 'tail1'}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button on:click={() => changeTail('tail2')} on:click={() => setActive('tail2')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/tails/Tail2.JPG"
      alt="Tail 2"
    />
    {#if $activeTail === 'tail2'}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button class="relative" on:click={() => changeTail('tail3')} on:click={() => setActive('tail3')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/tails/Tail3.JPG"
      alt="Tail 3"
    />
    {#if $activeTail === 'tail3'}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
</div>
