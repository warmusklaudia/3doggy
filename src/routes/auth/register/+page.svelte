<script lang="ts">
  import { goto } from '$app/navigation'
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
      loading = false
      return
    }
    if (userInput.password === '') {
      errorMessage = 'Password is required'
      loading = false
      return
    }
    if (repeatPassword === '' || repeatPassword !== userInput.password) {
      errorMessage = 'Passwords does not match'
      loading = false
      return
    }
    register(userInput.email, userInput.password)
      .then(() => {
        return goto('/')
      })
      .catch((error) => {
        console.log({ error })
        errorMessage = error.message.split(':')[1]
        loading = false
      })
      .finally(() => (loading = false))
  }
</script>

<svelte:head>
  <title>3Doggy | Register</title>
  <meta name="register" content="Create new account" />
</svelte:head>
<section>
  <div
    class="gap-6 py-6 flex items-center sm:w-2/3 m-auto flex-col rounded-xl shadow-lg bg-beta opacity-90  text-white"
  >
    <h1 class="text-xl md:text-3xl font-cormorant">Create new account</h1>
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
    <form on:submit={submitForm} class=" gap-4 flex flex-col justify-center" action="">
      <label class="block" for="email">
        <span class="block font-cormorant">Email</span>
        <input
          class="placeholder:font-cormorant w-full mt-1 py-2 bg-transparent border rounded-md px-3  focus:border-1 focus:border-alpha focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          autocomplete="email"
          bind:value={userInput.email}
        />
      </label>
      <label class="block" for="password">
        <span class="block font-cormorant">Password</span>
        <input
          class="w-full placeholder:font-cormorant mt-1  py-2 bg-transparent border rounded-md px-3   focus:border-1 focus:border-alpha focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          autocomplete="new-password"
          bind:value={userInput.password}
        />
      </label>
      <label class="block" for="repeatPassword">
        <span class="block font-cormorant">Confirm password </span>
        <input
          class="placeholder:font-cormorant w-full mt-1 py-2 bg-transparent border rounded-md px-3   focus:border-1 focus:border-alpha focus:outline-none"
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
          class="hover:underline mr-6 text-[#4AD5E2] md:mr-24  focus:ring-2 focus:ring-alpha focus:outline-none rounded-md"
          href="/auth/login">I have an account</a
        >
        <button
          class="text-white hover:bg-alpha-dark bg-alpha px-4 py-2 rounded-lg  focus:ring-2 focus:ring-alpha-dark focus:outline-none"
          disabled={loading}
          type="submit"
        >
          {#if !loading}
            <span class="text-sm sm:text-base">Register</span>
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
