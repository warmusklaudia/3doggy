<script lang="ts">
  import { goto } from '$app/navigation'
  import Background from '$lib/Background.svelte'
  import { login } from '$lib/utils/useAuth'
  import { X, AlertTriangle } from 'lucide-svelte'
  let errorMessage: string = ''
  let loading: boolean = false
  let userInput = {
    email: '',
    password: '',
  }

  const submitForm = () => {
    loading = true
    if (userInput.email === '') {
      errorMessage = 'Email is required'
      return
    }
    if (userInput.password === '') {
      errorMessage = 'Password is required'
      return
    }
    login(userInput.email, userInput.password)
      .then((u) => {
        return goto('/')
      })
      .catch((error) => {
        errorMessage = error.message
      })
      .finally(() => {
        loading = false
      })
  }
</script>

<svelte:head>
  <title>Log in</title>
  <meta name="log in" content="Log in to your account" />
</svelte:head>
<section>
  <Background />
  <div
    class="gap-6 py-12 flex items-center w-2/3 m-auto flex-col rounded-xl shadow-lg bg-beta opacity-90  text-white"
  >
    {#if errorMessage}
      <div
        class="bg-neutral-100 border gap-3 flex items-center justify-between rounded-md p-3 border-red-600 text-red-600"
      >
        <AlertTriangle />
        <p>{errorMessage}</p>
        <button
          on:click={() => (errorMessage = '')}
          class="rounded-full p-1 ring-red-600 border-red-600 border hover:bg-red-200 focus:outline-none focus:ring-1"
        >
          <X class="h-4 w-4 text-red-600" />
        </button>
      </div>
    {/if}
    <form on:submit={submitForm} class="gap-4 flex flex-col justify-center" action="">
      <label class="block" for="email">
        <span class="block">Email</span>
        <input
          class=" w-full mt-1 py-2 bg-transparent border rounded-md px-3"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          autocomplete="email"
          bind:value={userInput.email}
        />
      </label>
      <label class="block" for="password">
        <span class="block">Password</span>
        <input
          class="mt-1 w-full py-2 bg-transparent border rounded-md px-3"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          autocomplete="current-password"
          bind:value={userInput.password}
        />
      </label>
      <div class="flex items-center justify-between my-3">
        <a class="hover:underline text-[#4AD5E2] md:mr-10" href="/auth/register"
          >Don't have an account yet?</a
        >
        <button class="text-white bg-alpha px-4 py-2 rounded-lg" type="submit">Log in</button>
      </div>
    </form>
  </div>
</section>
