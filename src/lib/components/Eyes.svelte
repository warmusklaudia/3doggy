<script lang="ts">
  import { Scene } from 'three'
  import { eyes } from '$lib/utils/loadObjects'
  import { green, blue, brown } from '$lib/utils/colors'
  import { activeEyesColor, activeEyes } from '$lib/utils/parts'
  export let changeEyes: Function
  export let scene: Scene

  const setActive = (name: string) => {
    scene.children.map((c) => {
      if (c.name === name) {
        activeEyes.set(c.name)
      }
    })
  }

  const changeEyesColor = (color: string) => {
    activeEyesColor.set(color)
    $eyes.map((e) => {
      //@ts-ignore
      e.eyes.children.map((p) => {
        if (p.name.includes('pupil')) {
          p.material.color.set(color)
        }
      })
    })
  }
</script>

<div
  class="md:fixed flex flex-col md:flex-row gap-5 justify-center mb-6 md:mb-0 md:inset-y-0 items-center"
>
  <div class="flex md:flex-col gap-10 ">
    <button
      class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
      on:click={() => [changeEyes('eyes1'), setActive('eyes1')]}
    >
      <img class="rounded-full w-20 h-20 object-cover" src="/images/eyes/Eyes1.JPG" alt="Eyes 1" />
      {#if $activeEyes === 'eyes1'}
        <div class="flex items-center justify-end">
          <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
          <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
        </div>
      {/if}
    </button>
    <button
      class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
      on:click={() => [changeEyes('eyes2'), setActive('eyes2')]}
    >
      <img class="rounded-full w-20 h-20 object-cover" src="/images/eyes/Eyes2.JPG" alt="Eyes 2" />
      {#if $activeEyes === 'eyes2'}
        <div class="flex items-center justify-end">
          <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
          <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
        </div>
      {/if}
    </button>
    <button
      class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
      on:click={() => [changeEyes('eyes3'), setActive('eyes3')]}
    >
      <img class="rounded-full w-20 h-20 object-cover" src="/images/eyes/Eyes3.JPG" alt="Eyes 3" />
      {#if $activeEyes === 'eyes3'}
        <div class="flex items-center justify-end">
          <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
          <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
        </div>
      {/if}
    </button>
  </div>

  {#if $activeEyes === 'eyes2' || $activeEyes === 'eyes3'}
    <div class="flex md:flex-col gap-10 ">
      <button
        class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
        on:click={() => changeEyesColor(green)}
      >
        <img
          class="rounded-full w-20 h-20 object-cover"
          src="/images/eyes/EyesColor1.JPG"
          alt="Eyes 1"
        />
        {#if $activeEyesColor === green}
          <div class="flex items-center justify-end">
            <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
            <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
          </div>
        {/if}
      </button>
      <button
        class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
        on:click={() => changeEyesColor(blue)}
      >
        <img
          class="rounded-full w-20 h-20 object-cover"
          src="/images/eyes/EyesColor2.JPG"
          alt="Eyes 1"
        />
        {#if $activeEyesColor === blue}
          <div class="flex items-center justify-end">
            <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
            <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
          </div>
        {/if}
      </button>
      <button
        class="focus:ring-2 focus:ring-alpha focus:outline-none focus:rounded-full"
        on:click={() => changeEyesColor(brown)}
      >
        <img
          class="rounded-full w-20 h-20 object-cover"
          src="/images/eyes/EyesColor3.JPG"
          alt="Eyes 1"
        />
        {#if $activeEyesColor === brown}
          <div class="flex items-center justify-end">
            <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
            <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
          </div>
        {/if}
      </button>
    </div>
  {/if}
</div>
