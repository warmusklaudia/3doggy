<script>
  import Header from './Header.svelte'
  import '../app.css'
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-tr from-[#E4E6E6] to-white ">
  <Header />

  <main class=" flex flex-1 w-full flex-col p-4 max-w-5xl my-0 mx-auto box-border text-beta">
    <slot />
  </main>

  <footer class=" text-sm flex flex-col justify-center items-center p-3">
    <a
      class=" focus:ring-2 focus:ring-teal-800 focus:outline-none rounded-lg "
      href="https://klaudiawarmus.be">Website by KWS</a
    >
  </footer>
</div>
