<script lang="ts">
  import { Scene } from 'three'
  import { activeEars } from '$lib/utils/parts'

  export let changeEars: Function
  export let scene: Scene

  const setActive = (name: string) => {
    console.log(scene)
    scene.children.map((c) => {
      if (c.name === name) {
        activeEars.set(c.name)
      }
    })
  }
</script>

<div
  class="md:absolute md:right-20 md:bottom-0 md:top-0 flex md:flex-col gap-10 justify-center mb-6"
>
  <button on:click={() => changeEars('ears1')} on:click={() => setActive('ears1')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/ears/Ears1.JPG"
      alt="Ears 1"
    />
    {#if $activeEars === 'ears1'}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button on:click={() => changeEars('ears2')} on:click={() => setActive('ears2')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/ears/Ears2.JPG"
      alt="Ears 2"
    />
    {#if $activeEars === 'ears2'}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button on:click={() => changeEars('ears3')} on:click={() => setActive('ears3')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/ears/Ears3.JPG"
      alt="Ears 3"
    />
    {#if $activeEars === 'ears3'}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
</div>
