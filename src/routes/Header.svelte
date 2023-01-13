<script lang="ts">
  import { page } from '$app/stores'
  import Logo from '$lib/Logo.svelte'
  import { type User } from 'firebase/auth'
  import { logout, user } from '$lib/utils/useAuth'
  let userValue: User | null = null
  user.subscribe((value) => {
    userValue = value
  })
</script>

<header class="flex items-center justify-between mx-20 mt-10">
  <div aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
    <a href="/">
      <Logo />
    </a>
  </div>

  {#if $page.url.pathname !== '/auth/login' && $page.url.pathname !== '/auth/register'}
    <div />
    {#if !userValue}
      <nav>
        <ul class="flex gap-6 lg:text-lg relative">
          <li aria-current={$page.url.pathname === '/auth/login' ? 'page' : undefined}>
            <a class="text-beta" href="/auth/login">Log in</a>
          </li>
          <li aria-current={$page.url.pathname === '/auth/register' ? 'page' : undefined}>
            <a class="text-white bg-alpha p-3 rounded-lg" href="/auth/register"
              >Create new account</a
            >
          </li>
        </ul>
      </nav>
    {:else}
      <button
        on:click={logout}
        class=" flex items-center justify-center w-14 h-14 rounded-full bg-beta"
      >
        <p class="uppercase text-2xl text-white">{userValue.email?.toString()[0]}</p>
      </button>
    {/if}
  {/if}
</header>
