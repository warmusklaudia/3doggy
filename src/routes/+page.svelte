<script lang="ts">
  import { goto } from '$app/navigation'
  import type Quote from '$lib/interfaces/quote.interface'
  import { db } from '$lib/utils/useFirebase'
  import { collection, getDocs } from 'firebase/firestore'
  import { onMount } from 'svelte'

  let randomQuote: Quote

  const quotes: Quote[] = [
    {
      quote: 'Dogs are not our whole life, but they make our lives whole.',
      author: 'Roger Caras',
    },
    {
      quote: 'The better I get to know men, the more I find myself loving dogs.',
      author: 'Charles de Gaulle',
    },
    {
      quote: 'A dog is the only thing on earth that loves you more than he loves himself.',
      author: 'Josh Billings',
    },
    {
      quote:
        'The greatest fear dogs know is the fear that you will not come back when you go out the door without them.',
      author: 'Stanley Coren',
    },
    {
      quote: 'Happiness is a warm puppy.',
      author: 'Charles Schulz',
    },
    {
      quote: 'Everyone thinks they have the best dog, and none of them are wrong.',
      author: 'W.R. Purche',
    },
  ]

  const getRandomQuote = () => {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  }
  getRandomQuote()
</script>

<svelte:head>
  <title>3Doggy | Home</title>
  <meta name="description" content="3Doggy Home" />
</svelte:head>

<section
  class="flex flex-col-reverse  sm:flex-row sm:justify-around lg:justify-between items-center pt-10"
>
  <div class="flex flex-col gap-6 max-w-sm items-center sm:items-start">
    <h3 class="italic text-2xl font-cormorant font-medium">
      "{randomQuote.quote}" - {randomQuote.author}
    </h3>
    <h2 class="text-xl">Make your life better and create your canine friend in 3D!</h2>
    <button
      on:click={() => goto('/avatar-creator')}
      class="text-sm sm:text-base hover:bg-alpha-dark focus:ring-2 focus:ring-alpha-dark focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg w-2/3"
    >
      Make your own doggy</button
    >
  </div>
  <img class="w-1/3 sm:w-1/4 pb-6 sm:pb-0" src="/pngwing.png" alt="dog" />
</section>
