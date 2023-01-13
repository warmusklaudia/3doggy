<script>
  import { page } from '$app/stores'
  import logo from '$lib/images/svelte-logo.svg'
  import github from '$lib/images/github.svg'
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
      <li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
        <a class="text-beta" href="/login">Log in</a>
      </li>
      <li aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
        <a class="text-white bg-alpha p-3 rounded-lg" href="/register">Create new account</a>
      </li>
    </ul>
  </nav>
</header>
