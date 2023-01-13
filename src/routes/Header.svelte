<script>
  import { page } from '$app/stores'
  import Logo from '$lib/Logo.svelte'
</script>

<header class="flex items-center justify-between px-12 pt-10">
  <div aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
    <a href="/">
      <Logo />
    </a>
  </div>

  <nav>
    <ul class="flex gap-6 lg:text-lg relative">
      <li aria-current={$page.url.pathname === '/auth/login' ? 'page' : undefined}>
        <a class="text-beta" href="/auth/login">Log in</a>
      </li>
      <li aria-current={$page.url.pathname === '/auth/register' ? 'page' : undefined}>
        <a class="text-white bg-alpha p-3 rounded-lg" href="/auth/register">Create new account</a>
      </li>
    </ul>
  </nav>
</header>
