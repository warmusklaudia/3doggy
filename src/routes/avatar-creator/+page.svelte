<script lang="ts">
  import Dog from '../../lib/components/Dog.svelte'
  import {
    activeTail,
    activeEars,
    activeEyes,
    activeEyesColor,
    activeBodyColor,
  } from '$lib/utils/parts'
  import { green, lightBrown } from '$lib/utils/colors'

  activeTail.set('tail1')
  activeEars.set('ears1')
  activeEyes.set('eyes1')
  activeEyesColor.set(green)
  activeBodyColor.set(lightBrown)
</script>

<svelte:head>
  <title>3Doggy | Create avatar</title>
  <meta name="creator" content="Create your own doggy" />
</svelte:head>

<section class="flex justify-center items-center">
  <Dog dogId={undefined} />
</section>
