<script lang="ts">
  import { Scene } from 'three'
  import { eyes } from '$lib/utils/loadObjects'
  import { green, blue, brown } from '$lib/utils/colors'

  export let changeEyes: Function
  export let scene: Scene
  let activeEyes: string
  let activeColor: string

  scene.children.map((c) => {
    if (c.name.includes('eyes')) {
      activeEyes = c.name
    }
  })

  $eyes.map((e) => {
    //@ts-ignore
    e.eyes.children.map((p) => {
      if (p.name.includes('pupil')) {
        activeColor = `#${p.material.color.getHexString().toUpperCase()}`
      }
    })
  })

  const setActive = (name: string) => {
    scene.children.map((c) => {
      if (c.name === name) {
        activeEyes = c.name
      }
    })
  }

  const changeEyesColor = (color: string) => {
    activeColor = color
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
  class="md:absolute md:right-20 flex flex-col md:flex-row-reverse gap-5 justify-center mb-6 md:bottom-0 md:top-0 items-center"
>
  <div class="flex md:flex-col gap-10 ">
    <button on:click={() => changeEyes('eyes1')} on:click={() => setActive('eyes1')}>
      <img
        class="rounded-full w-20 h-20 object-cover"
        src="../../../src/lib/images/eyes/Eyes1.JPG"
        alt="Eyes 1"
      />
      {#if activeEyes === 'eyes1'}
        <div class="flex items-center justify-end">
          <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
          <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
        </div>
      {/if}
    </button>
    <button on:click={() => changeEyes('eyes2')} on:click={() => setActive('eyes2')}>
      <img
        class="rounded-full w-20 h-20 object-cover"
        src="../../../src/lib/images/eyes/Eyes2.JPG"
        alt="Eyes 2"
      />
      {#if activeEyes === 'eyes2'}
        <div class="flex items-center justify-end">
          <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
          <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
        </div>
      {/if}
    </button>
    <button on:click={() => changeEyes('eyes3')} on:click={() => setActive('eyes3')}>
      <img
        class="rounded-full w-20 h-20 object-cover"
        src="../../../src/lib/images/eyes/Eyes3.JPG"
        alt="Eyes 3"
      />
      {#if activeEyes === 'eyes3'}
        <div class="flex items-center justify-end">
          <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
          <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
        </div>
      {/if}
    </button>
  </div>

  {#if activeEyes === 'eyes2' || activeEyes === 'eyes3'}
    <div class="flex md:flex-col gap-10 ">
      <button on:click={() => changeEyesColor(green)}>
        <img
          class="rounded-full w-20 h-20 object-cover"
          src="../../../src/lib/images/eyes/EyesColor1.JPG"
          alt="Eyes 1"
        />
        {#if activeColor === green}
          <div class="flex items-center justify-end">
            <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
            <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
          </div>
        {/if}
      </button>
      <button on:click={() => changeEyesColor(blue)}>
        <img
          class="rounded-full w-20 h-20 object-cover"
          src="../../../src/lib/images/eyes/EyesColor2.JPG"
          alt="Eyes 1"
        />
        {#if activeColor === blue}
          <div class="flex items-center justify-end">
            <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
            <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
          </div>
        {/if}
      </button>
      <button on:click={() => changeEyesColor(brown)}>
        <img
          class="rounded-full w-20 h-20 object-cover"
          src="../../../src/lib/images/eyes/EyesColor3.JPG"
          alt="Eyes 1"
        />
        {#if activeColor === brown}
          <div class="flex items-center justify-end">
            <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
            <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
          </div>
        {/if}
      </button>
    </div>
  {/if}
</div>
