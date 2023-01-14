<script lang="ts">
  import { goto } from '$app/navigation'
  import Background from '$lib/Background.svelte'
  import { register } from '$lib/utils/useAuth'
  import { AlertTriangle, Loader2, X } from 'lucide-svelte'

  let errorMessage: string = ''
  let loading: boolean = false
  let repeatPassword: string
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
    if (repeatPassword === '' || repeatPassword !== userInput.password) {
      errorMessage = 'Password confirmation does not match'
      return
    }
    register(userInput.email, userInput.password)
      .then((u) => {
        return goto('/')
      })
      .catch((error) => {
        console.log({ error })
        errorMessage = error.message.split(':')[1]
      })
      .finally(() => {
        loading = false
      })
  }
</script>

<svelte:head>
  <title>3Doggy | Register</title>
  <meta name="register" content="Create new account" />
</svelte:head>
<section>
  <Background />
  <div
    class="gap-6 py-6 flex items-center w-2/3 m-auto flex-col rounded-xl shadow-lg bg-beta opacity-90  text-white"
  >
    <h1 class="text-3xl">Create new account</h1>
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
    <form on:submit={submitForm} class="w-1/2 gap-4 flex flex-col justify-center" action="">
      <label class="flex flex-col w-full" for="email">
        Email
        <input
          class="mt-1 py-2 bg-transparent border rounded-md px-3  focus:border-1 focus:border-teal-400 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          autocomplete="email"
          bind:value={userInput.email}
        />
      </label>
      <label class="flex flex-col" for="password">
        Password
        <input
          class="mt-1  py-2 bg-transparent border rounded-md px-3   focus:border-1 focus:border-teal-400 focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          autocomplete="new-password"
          bind:value={userInput.password}
        />
      </label>
      <label class="flex flex-col" for="repeatPassword">
        Confirm password
        <input
          class="mt-1 py-2 bg-transparent border rounded-md px-3   focus:border-1 focus:border-teal-400 focus:outline-none"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Enter password"
          autocomplete="new-password"
          bind:value={repeatPassword}
        />
      </label>
      <div class="flex items-center justify-between my-3">
        <a
          class="hover:underline text-[#4AD5E2]  focus:ring-2 focus:ring-teal-600 focus:outline-none rounded-md"
          href="/auth/login">I have an account</a
        >
        <button
          class="text-white hover:bg-alpha-dark bg-alpha px-4 py-2 rounded-lg  focus:ring-2 focus:ring-teal-600 focus:outline-none"
          disabled={loading}
          type="submit"
        >
          {#if !loading}
            <span>Register</span>
          {:else}
            <div class="animate-spin">
              <Loader2 />
            </div>
          {/if}
        </button>
      </div>
    </form>
  </div>
</section>
