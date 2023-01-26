<script lang="js">
  //@ts-nocheck
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    AmbientLight,
    Vector3,
    LoadingManager,
  } from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { onMount } from 'svelte'
  import { doc, setDoc, updateDoc } from 'firebase/firestore'
  import { v4 as uuidv4 } from 'uuid'
  import {
    loadBody,
    loadTail,
    loadEars,
    loadNose,
    loadMane,
    loadEyes,
    loadTongue,
    bodies,
    eyes,
    ears,
    tails,
  } from '$lib/utils/loadObjects'
  import Tails from './Tails.svelte'
  import Ears from '$lib/components/Ears.svelte'
  import Eyes from '$lib/components/Eyes.svelte'
  import Body from '$lib/components/Body.svelte'
  import { db, storage } from '$lib/utils/useFirebase'
  import { user } from '$lib/utils/useAuth'
  import { getDownloadURL, ref, uploadString } from 'firebase/storage'
  import {
    activeBodyColor,
    activeEars,
    activeEyes,
    activeEyesColor,
    activeTail,
    name,
  } from '$lib/utils/parts'
  import DogName from '$lib/components/DogName.svelte'
  import { goto } from '$app/navigation'
  import { loadingObjects, showName } from '$lib/utils/stores'
  import LoadingObjects from '$lib/components/LoadingObjects.svelte'
  export let dogId

  let canvas
  let camera, controls, renderer, cameraTarget, directionalLightA, directionalLightB, ambientLight
  let progress = 0
  let showTails = false
  let showEars = true
  let showEyes = false
  let showBody = false

  $: innerHeight = 0
  $: innerWidth = 0
  const loadingManager = new LoadingManager()
  const gltfLoader = new GLTFLoader(loadingManager)
  const scene = new Scene()

  $: {
    if ($tails.length === 3) {
      changeTail($activeTail)
    }
  }

  $: {
    if ($ears.length === 3) {
      changeEars($activeEars)
    }
  }

  $: {
    if ($eyes.length === 3) {
      changeEyes($activeEyes)
    }
  }

  $: {
    if ($bodies.length === 1 && $tails.length === 3 && $ears.length === 3) {
      changeBodyColor($activeBodyColor)
    }
  }

  $: {
    if ($eyes.length === 3) {
      changeEyesColor($activeEyesColor)
    }
  }

  const clearScene = (scene) => {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0])
    }
  }

  const handleClick = (event) => {
    if (!confirm('Are you sure you want to leave? All changes will be discarded.')) {
      event.preventDefault()
    }
  }

  onMount(() => {
    loadingManager.onStart = () => {
      loadingObjects.set(true)
    }

    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      progress = ((itemsLoaded / itemsTotal) * 100).toFixed(0)
    }

    loadingManager.onLoad = () => {
      loadingObjects.set(false)
    }

    loadingManager.onError = (e) => {
      console.log(e)
      loadingObjects.set(false)
    }

    clearScene(scene)
    loadTail(gltfLoader, scene)
    loadBody(gltfLoader, scene)
    loadEars(gltfLoader, scene)
    loadNose(gltfLoader, scene)
    loadMane(gltfLoader, scene)
    loadEyes(gltfLoader, scene)
    loadTongue(gltfLoader, scene)

    directionalLightA = new DirectionalLight('#ffffff', 1)
    directionalLightA.position.set(-0.5, 1, 2.25)
    scene.add(directionalLightA)

    directionalLightB = new DirectionalLight('#ffffff', 1)
    directionalLightB.position.set(0.5, 1, -2.25)
    scene.add(directionalLightB)

    ambientLight = new AmbientLight('#FFFEFC', 1.5)
    scene.add(ambientLight)

    camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 90)
    camera.position.set(0, 2, 5.5)
    camera.updateProjectionMatrix()
    scene.add(camera)

    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false

    renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: true,
    })

    renderer.setSize(innerWidth / 1.2, innerHeight / 1.2)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.physicallyCorrectLights = true

    const tick = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }

    tick()
    renderer.dispose()
  })

  const animate = () => {
    controls.update()
    camera.position.lerp(cameraTarget, 0.05)
    renderer.render(scene, camera)
    let x = requestAnimationFrame(animate)
    if (camera.position.distanceTo(cameraTarget) < 0.1) {
      cancelAnimationFrame(x)
    }
  }

  const tailsSettings = () => {
    cameraTarget = new Vector3(-4, 2, -4)
    showEars = false
    showEyes = false
    showBody = false
    showTails = !showTails
    if (showTails) {
      animate()
    }
    controls.update()
  }

  const earsSettings = () => {
    cameraTarget = new Vector3(0, 2, 5.5)
    showTails = false
    showEyes = false
    showBody = false
    showEars = !showEars
    if (showEars) {
      animate()
    }
    controls.update()
  }

  const eyesSettings = () => {
    cameraTarget = new Vector3(0, 3, 4)

    showTails = false
    showEars = false
    showBody = false
    showEyes = !showEyes
    if (showEyes) {
      animate()
    }
    controls.update()
  }

  const bodySettings = () => {
    cameraTarget = new Vector3(-5, 2, 1.5)
    showTails = false
    showEars = false
    showEyes = false
    showBody = !showBody
    animate()
  }

  const changeBodyColor = (color) => {
    $bodies.map((b) => {
      b.body.children.map((p) => {
        if (p.name.includes('body')) {
          p.material.color.set(color)
        }
      })
    })
    $ears.map((e) => {
      e.ears.children.map((p) => {
        if (p.name.includes('body')) {
          p.material.color.set(color)
        }
      })
    })
    $tails.map((t) => {
      t.tail.children.map((p) => {
        if (p.name.includes('body')) {
          p.material.color.set(color)
        }
      })
    })
  }

  const changeEars = (name) => {
    let ear = $ears.find((e) => e.name === name)
    $ears.map((e) => {
      scene.remove(e.ears)
    })
    scene.add(ear.ears)
  }

  const changeEyes = (name) => {
    let eye = $eyes.find((e) => e.name === name)
    $eyes.map((e) => {
      scene.remove(e.eyes)
    })
    scene.add(eye.eyes)
  }

  const changeEyesColor = (color) => {
    $eyes.map((e) => {
      e.eyes.children.map((p) => {
        if (p.name.includes('pupil')) {
          p.material.color.set(color)
        }
      })
    })
  }

  const changeTail = (name) => {
    let tail = $tails.find((t) => t.name === name)
    $tails.map((t) => {
      scene.remove(t.tail)
    })
    scene.add(tail.tail)
  }

  const resize = () => {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth / 1.2, innerHeight / 1.2)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  }

  const saveDog = async () => {
    const id = uuidv4()
    const date = new Date()
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const dataToAdd = {
      id: id,
      //TODO
      name: $name,
      breed: 'Shiba',
      ears: $activeEars,
      eyes: $activeEyes,
      tail: $activeTail,
      eyesColor: $activeEyesColor,
      bodyColor: $activeBodyColor,
      created: date.toLocaleDateString('en-GB', dateOptions),
    }
    const dataToUpdate = {
      //TODO
      name: $name,
      breed: 'Shiba',
      ears: $activeEars,
      eyes: $activeEyes,
      tail: $activeTail,
      eyesColor: $activeEyesColor,
      bodyColor: $activeBodyColor,
    }
    if (!dogId) {
      try {
        await setDoc(doc(db, '3doggy', `${$user.uid}/dog`, id), dataToAdd).then(async () => {
          await saveImage(id)
        })
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    } else {
      try {
        await updateDoc(doc(db, '3doggy', `${$user.uid}/dog`, dogId), dataToUpdate).then(
          async () => {
            await saveImage(dogId)
          },
        )
      } catch (e) {
        console.error('Error updating document: ', e)
      }
    }
    name.set('')
    goto('/avatar-creator/library')
  }

  const getImg = async (storageRef, id) => {
    const dogRef = doc(db, '3doggy', `${$user.uid}/dog`, id)
    await getDownloadURL(storageRef).then(async (link) => {
      await updateDoc(dogRef, {
        img: link,
      })
    })
  }

  const saveImage = async (id) => {
    const storageRef = ref(storage, `${id}.jpg`)
    camera.position.set(-4, 2.5, 4)
    controls.update()
    renderer.setClearColor('#ffffff', 1)
    renderer.render(scene, camera)
    const img = canvas.toDataURL('image/jpeg')
    renderer.setClearColor(null, 0)
    renderer.render(scene, camera)
    await uploadString(storageRef, img.split('base64,')[1], 'base64')
      .then(async () => {
        await getImg(storageRef, id)
      })
      .catch((err) => {
        console.log(err)
      })
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={resize} on:beforeunload={handleClick} />

<div class="flex flex-col md:static">
  {#if $showName}
    <DogName {saveDog} {dogId} />
  {/if}
  <canvas bind:this={canvas} class="mt-10 -mb-32 md:-mb-0" />
  {#if $loadingObjects}
    <LoadingObjects {progress} />
  {:else}
    <div class="md:ml-16">
      {#if showTails}
        <Tails {changeTail} {scene} />
      {/if}
      {#if showEyes}
        <Eyes {changeEyes} {scene} />
      {/if}
      {#if showEars}
        <Ears {changeEars} {scene} />
      {/if}
      {#if showBody}
        <Body />
      {/if}
    </div>
    <div class="flex gap-3 md:gap-0 flex-col md:flex-row justify-center md:-mt-10 items-center ">
      <div class="flex md:gap-12 md:w-3/5 relative bg-opacity-20 ">
        <div class="">
          <input
            class="sr-only peer"
            checked
            id="ears"
            type="radio"
            name="settings"
            on:change={earsSettings}
          />
          <label
            for="ears"
            class="rounded-md px-6 py-2 hover:cursor-pointer peer-checked:bg-alpha peer-checked:text-white"
          >
            Ears
          </label>
        </div>
        <div class="">
          <input
            class=" sr-only peer"
            id="eyes"
            type="radio"
            name="settings"
            on:change={eyesSettings}
          />
          <label
            for="eyes"
            class="rounded-md px-6 py-2 hover:cursor-pointer peer-checked:bg-alpha peer-checked:text-white"
          >
            Eyes
          </label>
        </div>
        <div class="">
          <input
            class=" sr-only peer"
            id="body"
            type="radio"
            name="settings"
            on:change={bodySettings}
          />
          <label
            for="body"
            class="rounded-md px-6 py-2 hover:cursor-pointer peer-checked:bg-alpha peer-checked:text-white"
          >
            Body
          </label>
        </div>
        <div class="">
          <input
            class=" sr-only peer"
            id="tails"
            type="radio"
            name="settings"
            on:change={tailsSettings}
          />
          <label
            for="tails"
            class="rounded-md px-6 py-2 hover:cursor-pointer peer-checked:bg-alpha peer-checked:text-white"
          >
            Tail
          </label>
        </div>
      </div>
      <button
        class="rounded-md px-6 py-2 bg-alpha text-white hover:bg-alpha-dark  focus:ring-2 focus:ring-alpha-dark focus:outline-none"
        on:click={() => showName.set(!$showName)}>Save</button
      >
    </div>
  {/if}
</div>
