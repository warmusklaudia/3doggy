<script>
  import Header from './Header.svelte'
  import '../app.css'
  import { page } from '$app/stores'
</script>

<div
  class={$page.url.pathname.startsWith('/auth')
    ? 'flex min-h-screen flex-col overflow-hidden font-openSans bg-paws bg-contain md:bg-auto bg-no-repeat bg-right '
    : 'flex min-h-screen flex-col overflow-hidden font-openSans bg-gradient-to-tr from-[#E4E6E6] to-white '}
>
  <Header />

  <main class="w-full flex flex-1 flex-col px-6 py-3  max-w-5xl my-0 mx-auto box-border text-beta ">
    <slot />
  </main>
  {#if $page.url.pathname !== '/avatar-creator'}
    <footer class=" text-sm flex flex-col justify-center items-center p-3">
      <a
        class="hover:opacity-80 focus:ring-2 font-cormorant focus:ring-alpha-dark focus:outline-none rounded-lg "
        href="https://klaudiawarmus.be">Website by KWS</a
      >
    </footer>
  {/if}
</div>
