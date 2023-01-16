<script lang="ts">
  export let changeTail: Function
</script>

<div class="flex gap-10 justify-center mb-6">
  <button on:click={() => changeTail('tail1')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/tails/Tail1.JPG"
      alt="Tail 1"
    />
  </button>
  <button on:click={() => changeTail('tail2')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/tails/Tail2.JPG"
      alt="Tail 2"
    />
  </button>
  <button on:click={() => changeTail('tail3')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/tails/Tail3.JPG"
      alt="Tail 3"
    />
  </button>
</div>
