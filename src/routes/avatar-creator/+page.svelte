<script lang="ts">
  import Dog from '../../lib/components/Dog.svelte'
  import {
    activeTail,
    activeEars,
    activeEyes,
    activeBodyColor,
    activeEyesColor,
    activeCollarColor,
    activeBreed,
  } from '$lib/utils/parts'

  activeTail.set('tail1')
  activeEars.set('ears1')
  activeEyes.set('eyes1')
  activeBreed.set('Shiba')
</script>

<svelte:head>
  <title>3Doggy | Create avatar</title>
  <meta name="creator" content="Create your own doggy" />
</svelte:head>

<section class="flex justify-center items-center">
  <Dog dogId={undefined} />
</section>
