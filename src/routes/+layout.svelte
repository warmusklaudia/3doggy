<script>
  import Header from './Header.svelte'
  import '../app.css'
  import { page } from '$app/stores'
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-tr from-[#E4E6E6] to-white ">
  <Header />

  <main class="w-full flex flex-1 flex-col p-4 max-w-5xl my-0 mx-auto box-border text-beta">
    <slot />
  </main>
  {#if $page.url.pathname !== '/avatar-creator'}
    <footer class=" text-sm flex flex-col justify-center items-center p-3">
      <a
        class="hover:opacity-80 focus:ring-2 focus:ring-teal-800 focus:outline-none rounded-lg "
        href="https://klaudiawarmus.be">Website by KWS</a
      >
    </footer>
  {/if}
</div>
