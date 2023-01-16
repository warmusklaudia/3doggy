<script lang="ts">
  export let changeEars: Function
</script>

<div class="flex gap-10 justify-center mb-6">
  <button on:click={() => changeEars('ears1')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/ears/Ears1.JPG"
      alt="Tail 1"
    />
  </button>
  <button on:click={() => changeEars('ears2')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/ears/Ears2.JPG"
      alt="Tail 2"
    />
  </button>
  <button on:click={() => changeEars('ears3')}>
    <img
      class="rounded-full w-20 h-20 object-cover"
      src="../../../src/lib/images/ears/Ears3.JPG"
      alt="Tail 3"
    />
  </button>
</div>
