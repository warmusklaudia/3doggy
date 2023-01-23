<script lang="ts">
  import { dog } from '$lib/utils/parts'
  import Dog from '../../Dog.svelte'

  console.log($dog)
</script>

<section class="flex justify-center items-center">
  <Dog activeTailName={$dog?.tail} activeEarsName={$dog?.ears} activeEyesName={$dog?.eyes} />
</section>
