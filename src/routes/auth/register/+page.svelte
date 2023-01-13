<script lang="ts">
  import Background from '$lib/Background.svelte'
  import { register } from '$lib/utils/useAuth'

  let repeatPassword: string
  let userInput = {
    email: '',
    password: '',
  }
  let errorMessage: string = ''

  const submitForm = () => {
    if (userInput.email === '') {
      errorMessage = 'Email is required'
      return
    }
    if (userInput.password === '') {
      errorMessage = 'Password is required'
      return
    }
    register(userInput.email, userInput.password).then(async (u) => {
      console.log(u)
    })
  }
</script>

<svelte:head>
  <title>Register</title>
  <meta name="register" content="Create new account" />
</svelte:head>
<section>
  <Background />
  <div
    class="gap-6 py-6 flex items-center w-2/3 m-auto flex-col rounded-xl shadow-lg bg-beta opacity-90  text-white"
  >
    <h1 class="text-3xl">Create new account</h1>
    <form on:submit={submitForm} class="w-1/2 gap-4 flex flex-col justify-center" action="">
      <label class="flex flex-col w-full" for="email">
        Email
        <input
          class="mt-1 py-2 bg-transparent border rounded-md px-3"
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
          class="mt-1  py-2 bg-transparent border rounded-md px-3"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          autocomplete="new-password"
          bind:value={userInput.password}
        />
      </label>
      <label class="flex flex-col" for="repeatPassword">
        Repeat password
        <input
          class="mt-1 py-2 bg-transparent border rounded-md px-3"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Enter password"
          autocomplete="new-password"
          bind:value={repeatPassword}
        />
      </label>
      <div class="flex items-center justify-between my-3">
        <a class="hover:underline text-[#4AD5E2]" href="/auth/login">I have an account</a>
        <button class="text-white bg-alpha px-4 py-2 rounded-lg" type="submit">Register</button>
      </div>
    </form>
  </div>
</section>
