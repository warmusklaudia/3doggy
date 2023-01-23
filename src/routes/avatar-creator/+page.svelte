<script lang="ts">
  import Dog from './Dog.svelte'
  import {
    activeTail,
    activeEars,
    activeEyes,
    activeBodyColor,
    activeEyesColor,
  } from '$lib/utils/parts'

  activeTail.set('tail2')
  activeEars.set('ears1')
  activeEyes.set('eyes1')
</script>

<svelte:head>
  <title>3Doggy | Create avatar</title>
  <meta name="creator" content="Create your own doggy" />
</svelte:head>

<section class="flex justify-center items-center">
  <Dog
    activeTailName={$activeTail}
    activeEarsName={$activeEars}
    activeEyesName={$activeEyes}
    activeBodyCol={$activeBodyColor}
    activeEyesCol={$activeEyesColor}
  />
</section>
