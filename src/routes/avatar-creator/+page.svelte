<script lang="ts">
  import Dog from './Dog.svelte'
  let activeTailName = 'tail2'
  let activeEarsName = 'ears3'
  let activeEyesName = 'eyes3'
  let activeBodyName = 'body1'
  let activeManeName = 'mane1'
  let activeNoseName = 'nose1'
  let activeTongueName = 'tongue1'
</script>

<svelte:head>
  <title>3Doggy | Create avatar</title>
  <meta name="creator" content="Create your own doggy" />
</svelte:head>

<section class="flex justify-center items-center">
  <Dog {activeTailName} {activeEarsName} {activeEyesName} />
</section>
