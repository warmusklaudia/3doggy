<script lang="ts">
  import { lightBrown, gray, darkBrown } from '$lib/utils/colors'
  import { bodies, ears, tails } from '$lib/utils/loadObjects'
  import { activeBodyColor } from '$lib/utils/parts'
  export let activeColor: string

  $: if (activeColor) {
    changeBodyColor(activeColor)
  }

  const changeBodyColor = (color: string) => {
    activeBodyColor.set(color)
    $bodies.map((b) => {
      //@ts-ignore
      b.body.children.map((p) => {
        if (p.name.includes('body')) {
          p.material.color.set(color)
        }
      })
    })
    $ears.map((e) => {
      //@ts-ignore
      e.ears.children.map((p) => {
        if (p.name.includes('body')) {
          p.material.color.set(color)
        }
      })
    })
    $tails.map((t) => {
      //@ts-ignore
      t.tail.children.map((p) => {
        if (p.name.includes('body')) {
          p.material.color.set(color)
        }
      })
    })
  }
</script>

<div class="md:fixed md:inset-y-0 flex md:flex-col gap-10 justify-center mb-6 md:mb-0">
  <button on:click={() => changeBodyColor(lightBrown)}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/body/BodyColor1.JPG"
      alt="Tail 1"
    />
    {#if $activeBodyColor === lightBrown}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button on:click={() => changeBodyColor(darkBrown)}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/body/BodyColor2.JPG"
      alt="Tail 2"
    />
    {#if $activeBodyColor === darkBrown}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
  <button on:click={() => changeBodyColor(gray)} class="relative">
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/body/BodyColor3.JPG"
      alt="Tail 3"
    />
    {#if $activeBodyColor === gray}
      <div class="flex items-center justify-end">
        <div class="w-4 h-4 mr-1 absolute -mt-4 bg-alpha rounded-full" />
        <div class="w-6 h-6 absolute -mt-4 bg-alpha rounded-full animate-pulse" />
      </div>
    {/if}
  </button>
</div>
