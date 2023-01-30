<script>
  import Header from './Header.svelte'
  import '../app.css'
  import { page } from '$app/stores'
</script>

<div
  class={$page.url.pathname.startsWith('/auth')
    ? 'flex min-h-screen flex-col overflow-hidden font-openSans bg-paws bg-contain md:bg-auto bg-no-repeat bg-right selection:bg-alpha selection:text-white'
    : 'flex min-h-screen flex-col overflow-hidden font-openSans bg-gradient-to-tr from-[#E4E6E6] to-white selection:bg-alpha selection:text-white '}
>
  <Header />

  <main class="w-full flex flex-1 flex-col px-6 py-3  max-w-5xl my-0 mx-auto box-border text-beta ">
    <slot />
  </main>
  {#if $page.url.pathname !== '/avatar-creator' || $page.url.pathname.startsWith('/avatar-creator/edit')}
    <footer class=" text-sm flex flex-col justify-center items-center p-3">
      <a
        class="hover:opacity-80 focus:ring-2 font-cormorant focus:ring-alpha-dark focus:outline-none rounded-lg "
        href="https://klaudiawarmus.be">Website by KWS</a
      >
    </footer>
  {:else}
    <footer class=" text-sm flex justify-center items-center p-3 font-cormorant">
      This
      <a
        class="mx-1 underline hover:opacity-80 focus:ring-2 focus:ring-alpha-dark focus:outline-none rounded-lg "
        href="https://sketchfab.com/3d-models/shiba-inu-dog-80419f7e64e24afe97e0931b6aeee612"
      >
        3D Model
      </a>
      is licensed under a {' '}
      <a
        rel="license"
        class="ml-1 hover:opacity-80 focus:ring-2 focus:ring-alpha-dark focus:outline-none rounded-lg "
        href="http://creativecommons.org/licenses/by/4.0/"
      >
        <span> {' '}</span> CC Attribution 4.0 International License</a
      >
    </footer>
  {/if}
</div>
