<script lang="ts">
  import { dog } from '$lib/utils/parts'
  import Dog from '../../../../lib/components/Dog.svelte'
  import {
    activeTail,
    activeEars,
    activeEyes,
    activeBodyColor,
    activeEyesColor,
  } from '$lib/utils/parts'
  $: {
    activeTail.set($dog!.tail)
    activeEars.set($dog!.ears)
    activeEyes.set($dog!.eyes)
    activeBodyColor.set($dog!.bodyColor)
    activeEyesColor.set($dog!.eyesColor)
  }
</script>

<svelte:head>
  <title>3Doggy | Edit</title>
  <meta name="edit" content="Avatar editing" />
</svelte:head>

<section class="flex justify-center items-center">
  <Dog dogId={$dog?.id} />
</section>
