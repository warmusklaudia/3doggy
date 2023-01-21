<script>
  import { goto } from '$app/navigation'
  import { Edit, Plus, Trash2 } from 'lucide-svelte'
</script>

<svelte:head>
  <title>3Doggy | Library</title>
  <meta name="library" content="Library" />
</svelte:head>

<section class="">
  <button
    on:click={() => goto('/avatar-creator')}
    class="mb-6 flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha p-3 rounded-lg "
  >
    <Plus class="mr-2" />
    Create new dog</button
  >
  <div class="grid grid-cols-2 gap-x-10 gap-y-6 overflow-y-auto max-h-[60vh] pb-2">
    <div class="flex items-center bg-white rounded-xl shadow-lg p-6">
      <img src="/defaultDog.jpeg" alt="" class="w-32 h-32 object-cover rounded-xl" />
      <div>
        <h2 class="text-lg pb-2">Bambi</h2>
        <div class="pb-3">
          <p>Shiba</p>
          <p>Born on 21 January 2023</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Edit class="mr-2" size={20} />
            Edit</button
          >
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Trash2 class="mr-2" size={20} />
            Delete</button
          >
        </div>
      </div>
    </div>
    <div class="flex items-center bg-white rounded-xl shadow-lg p-6">
      <img src="/defaultDog.jpeg" alt="" class="w-32 h-32 object-cover rounded-xl" />
      <div>
        <h2 class="text-lg pb-2">Bambi</h2>
        <div class="pb-3">
          <p>Shiba</p>
          <p>Born on 21 January 2023</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Edit class="mr-2" size={20} />
            Edit</button
          >
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Trash2 class="mr-2" size={20} />
            Delete</button
          >
        </div>
      </div>
    </div>
    <div class="flex items-center bg-white rounded-xl shadow-lg p-6">
      <img src="/defaultDog.jpeg" alt="" class="w-32 h-32 object-cover rounded-xl" />
      <div>
        <h2 class="text-lg pb-2">Bambi</h2>
        <div class="pb-3">
          <p>Shiba</p>
          <p>Born on 21 January 2023</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Edit class="mr-2" size={20} />
            Edit</button
          >
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Trash2 class="mr-2" size={20} />
            Delete</button
          >
        </div>
      </div>
    </div>
    <div class="flex items-center bg-white rounded-xl shadow-lg p-6">
      <img src="/defaultDog.jpeg" alt="" class="w-32 h-32 object-cover rounded-xl" />
      <div>
        <h2 class="text-lg pb-2">Bambi</h2>
        <div class="pb-3">
          <p>Shiba</p>
          <p>Born on 21 January 2023</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Edit class="mr-2" size={20} />
            Edit</button
          >
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Trash2 class="mr-2" size={20} />
            Delete</button
          >
        </div>
      </div>
    </div>
    <div class="flex items-center bg-white rounded-xl shadow-lg p-6">
      <img src="/defaultDog.jpeg" alt="" class="w-32 h-32 object-cover rounded-xl" />
      <div>
        <h2 class="text-lg pb-2">Bambi</h2>
        <div class="pb-3">
          <p>Shiba</p>
          <p>Born on 21 January 2023</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Edit class="mr-2" size={20} />
            Edit</button
          >
          <button
            class="text-sm flex items-center hover:bg-alpha-dark focus:ring-2 focus:ring-teal-800 focus:outline-none  text-white text-center bg-alpha py-2 px-3 rounded-lg "
          >
            <Trash2 class="mr-2" size={20} />
            Delete</button
          >
        </div>
      </div>
    </div>
  </div>
</section>
