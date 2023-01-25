<script lang="ts">
  import { Loader2 } from 'lucide-svelte'
  export let progress: number
</script>

<section class="fixed inset-0 z-50 flex justify-center items-center">
  <div
    class="bg-beta bg-opacity-90 p-4 rounded-lg shadow-2xl text-white items-center flex flex-col relative"
  >
    <Loader2 class="animate-spin" />
    <h2 class="py-3 px-4 font-cormorant text-lg font-medium w-64 text-center">
      Waiting for 3D objects...
    </h2>
    <h2 class="py-3 px-4 font-cormorant text-lg font-medium w-64 text-center">
      {progress}% loaded
    </h2>
  </div>
</section>
