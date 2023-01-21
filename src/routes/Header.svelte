<script lang="ts">
  import { page } from '$app/stores'
  import Logo from '$lib/Logo.svelte'
  import { logout, user } from '$lib/utils/useAuth'
  let showMenu = false

  const toggleMenu = () => {
    showMenu = !showMenu
  }
</script>

{#if $page.url.pathname !== '/avatar-creator'}
  <header class="flex items-center justify-between mx-20 mt-10">
    <div aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
      <a class="focus:ring-2 focus:ring-teal-800 rounded-lg " href="/">
        <Logo />
      </a>
    </div>

    {#if $page.url.pathname !== '/auth/login' && $page.url.pathname !== '/auth/register'}
      <div />
      {#await $user}
        <p>Loading...</p>
      {:then user}
        {#if !user}
          <nav>
            <ul class="flex gap-6 lg:text-lg relative">
              <li aria-current={$page.url.pathname === '/auth/login' ? 'page' : undefined}>
                <a
                  class="text-beta focus:ring-2 focus:ring-teal-800 focus:outline-none rounded-lg hover:opacity-80"
                  href="/auth/login">Log in</a
                >
              </li>
              <li aria-current={$page.url.pathname === '/auth/register' ? 'page' : undefined}>
                <a
                  class="text-white bg-alpha p-3 hover:bg-alpha-dark rounded-lg focus:ring-2 focus:ring-teal-800 focus:outline-none"
                  href="/auth/register">Create new account</a
                >
              </li>
            </ul>
          </nav>
        {:else}
          <button
            on:click={logout}
            class=" flex items-center justify-center w-14 h-14 rounded-full bg-beta"
          >
            <p class="uppercase text-2xl text-white">{user?.email?.toString()[0]}</p>
          </button>
        {/if}
      {/await}
    {/if}
  </header>
{:else}
  <nav class="absolute w-full pt-10 px-20 flex justify-between items-center ">
    <div class="">
      <a class="focus:ring-2 focus:ring-teal-800 rounded-lg " href="/">
        <Logo />
      </a>
    </div>
    <div class="relative flex flex-col items-center whitespace-nowrap">
      <button
        on:click={toggleMenu}
        class=" flex items-center justify-center w-14 h-14 rounded-full bg-beta"
      >
        <p class="uppercase text-2xl text-white">{$user?.email?.toString()[0] || ''}</p>
      </button>
      <ul
        class={'text-left mt-14 absolute bg-white z-50 py-2 rounded-lg shadow-lg' +
          (showMenu ? '' : ' hidden')}
      >
        <li>
          <a
            on:click={logout}
            class="
            text-sm
            py-2
            pr-6 pl-3
            block
            w-full
            whitespace-nowrap
            text-gray-700
            hover:bg-gray-100
          "
            href="/">My account</a
          >
        </li>
        <li>
          <a
            class="
              text-sm
              py-2
              pr-6 pl-3
              block
              w-full
              whitespace-nowrap
              text-gray-700
              hover:bg-gray-100
            "
            href="/avatar-creator/library">Library</a
          >
        </li>
        <li>
          <a
            on:click={logout}
            class="
                text-sm
                py-2
                pr-6 pl-3
                block
                w-full
                whitespace-nowrap
                text-gray-700
                hover:bg-gray-100
              "
            href="/">Log out</a
          >
        </li>
      </ul>
    </div>
  </nav>
{/if}
