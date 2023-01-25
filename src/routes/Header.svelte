<script lang="ts">
  import { page } from '$app/stores'
  import Logo from '$lib/Logo.svelte'
  import { logout, user } from '$lib/utils/useAuth'
  import { Library, Loader2, LogOut, User } from 'lucide-svelte'
  let showMenu = false

  const toggleMenu = () => {
    showMenu = !showMenu
  }

  const handleClick = (event: any) => {
    if (!confirm('Are you sure you want to leave? All changes will be discarded.')) {
      event.preventDefault()
    }
  }

  console.log(user)
  console.log($user)
</script>

<header
  class={'flex justify-between items-center ' +
    ($page.url.pathname === '/avatar-creator' ||
    $page.url.pathname.startsWith('/avatar-creator/edit')
      ? 'absolute w-full pt-3 px-6 md:pt-10 md:px-20 z-50'
      : ' mx-6 mt-3 md:mx-20 md:mt-10')}
>
  <div aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
    {#if $page.url.pathname !== '/avatar-creator' && !$page.url.pathname.startsWith('/avatar-creator/edit')}
      <a class="focus:ring-2 focus:ring-teal-800 rounded-lg relative z-10" href="/">
        <Logo />
      </a>
    {:else}
      <a on:click={handleClick} class="focus:ring-2 focus:ring-teal-800 rounded-lg " href="/">
        <Logo />
      </a>
    {/if}
  </div>

  {#if $page.url.pathname !== '/auth/login' && $page.url.pathname !== '/auth/register'}
    <div />
    {#await user.known}
      <Loader2 class="animate-spin text-beta" size={30} />
    {:then}
      {#if $user}
        <nav>
          <div class=" flex flex-col items-center whitespace-nowrap">
            <button
              on:click={toggleMenu}
              class=" flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-beta"
            >
              <p class="uppercase text-lg font-cormorant font-bold sm:text-2xl text-white">
                {$user?.email?.toString()[0] || ''}
              </p>
            </button>
            <ul
              class={'text-left mt-14 absolute bg-white z-50 py-2 rounded-lg shadow-lg text-beta mr-14 md:mr-0' +
                (showMenu ? '' : ' hidden')}
            >
              <li class="flex items-center  hover:bg-gray-100">
                <a
                  on:click={toggleMenu}
                  class="flex items-center text-sm py-2 pr-6 pl-3 w-full whitespace-nowrap"
                  href="/profile"
                >
                  <User class="mr-2" size={20} />My account</a
                >
              </li>
              <li class="flex items-center  hover:bg-gray-100">
                <a
                  on:click={toggleMenu}
                  class="flex items-center text-sm py-2 pr-6 pl-3 w-full whitespace-nowrap"
                  href="/avatar-creator/library"
                >
                  <Library class="mr-2" size={20} />Library</a
                >
              </li>
              <li class="border-t-1 border-t" />
              <li class="pt-1 flex items-center  hover:bg-gray-100">
                <button
                  on:click={toggleMenu}
                  on:click={logout}
                  class="flex items-center text-sm py-2 pr-6 pl-3 w-full whitespace-nowrap"
                >
                  <LogOut class="mr-2" size={20} />Log out</button
                >
              </li>
            </ul>
          </div>
        </nav>
      {:else}
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
      {/if}
    {/await}
  {/if}
</header>
