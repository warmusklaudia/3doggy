<!-- <script context="module">
  import { protect } from '$lib/utils/useAuth'

  export let before = protect
</script> -->
<script lang="ts">
  import Dog from './Dog.svelte'
  let activeTailName = 'tail2'
</script>

<svelte:head>
  <title>3Doggy | Create avatar</title>
  <meta name="creator" content="Create your own doggy" />
</svelte:head>

<section class="flex justify-center items-center">
  <Dog />
</section>
