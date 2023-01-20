<script lang="js">
  //@ts-nocheck
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    AmbientLight,
    Vector3,
  } from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { onMount } from 'svelte'
  import {
    loadBody,
    loadTail,
    loadEars,
    loadNose,
    loadMane,
    loadEyes,
    loadTongue,
    tails,
    bodies,
    manes,
    noses,
    eyes,
    ears,
    tongues,
  } from '$lib/utils/loadObjects'
  import Tails from '../../lib/components/Tails.svelte'
  import Ears from '$lib/components/Ears.svelte'
  import Eyes from '$lib/components/Eyes.svelte'
  import Body from '$lib/components/Body.svelte'

  let canvas
  let camera, controls, renderer, cameraTarget, directionalLightA, directionalLightB, ambientLight

  let showTails = false
  let showEars = false
  let showEyes = false
  let showBody = false

  $: innerHeight = 0
  $: innerWidth = 0
  const gltfLoader = new GLTFLoader()
  const scene = new Scene()

  loadTail(gltfLoader, scene)
  loadBody(gltfLoader, scene)
  loadEars(gltfLoader, scene)
  loadNose(gltfLoader, scene)
  loadMane(gltfLoader, scene)
  loadEyes(gltfLoader, scene)
  loadTongue(gltfLoader, scene)

  onMount(() => {
    directionalLightA = new DirectionalLight('#ffffff', 1)
    directionalLightA.position.set(-0.5, 1, 2.25)
    scene.add(directionalLightA)

    directionalLightB = new DirectionalLight('#ffffff', 1)
    directionalLightB.position.set(0.5, 1, -2.25)
    scene.add(directionalLightB)

    ambientLight = new AmbientLight('#FFFEFC', 1.5)
    scene.add(ambientLight)

    camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 90)
    camera.position.set(-4, 1.5, 4)
    scene.add(camera)

    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = true
    controls.enableZoom = true

    renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: true,
    })

    renderer.setSize(innerWidth / 1.25, innerHeight / 1.25)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.physicallyCorrectLights = true

    const tick = () => {
      controls.update()
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  })

  const animate = () => {
    controls.update()
    camera.position.lerp(cameraTarget, 0.03)
    renderer.render(scene, camera)
    let x = requestAnimationFrame(animate)
    if (camera.position.distanceTo(cameraTarget) < 0.01) {
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
    cameraTarget = new Vector3(-5, 1.5, 1.5)
    showTails = false
    showEars = false
    showEyes = false
    showBody = !showBody
    animate()
  }

  const changeTail = (name) => {
    let tail = tails.find((t) => t.name === name)
    tails.map((t) => {
      scene.remove(t.tail)
    })
    scene.add(tail.tail)
  }

  const changeEars = (name) => {
    let ear = ears.find((e) => e.name === name)
    ears.map((e) => {
      scene.remove(e.ears)
    })
    scene.add(ear.ears)
  }

  const changeEyes = (name) => {
    let eye = eyes.find((e) => e.name === name)
    eyes.map((e) => {
      scene.remove(e.eyes)
    })
    scene.add(eye.eyes)
  }

  const resize = () => {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth / 1.25, innerHeight / 1.25)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={resize} />

<div class="md:relative">
  <canvas bind:this={canvas} class="mt-10" />
  <div>
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
  <div class="flex justify-evenly rouded-full -mt-10 relative">
    <button
      class="rounded-full w-16 h-16 bg-alpha hover:scale-110 text-white"
      on:click={tailsSettings}
    >
      Tail
    </button>
    <button
      class="rounded-full w-16 h-16 bg-alpha hover:scale-110 text-white"
      on:click={eyesSettings}
    >
      Eyes
    </button>
    <button
      class="rounded-full w-16 h-16 bg-alpha hover:scale-110 text-white"
      on:click={earsSettings}
    >
      Ears
    </button>
    <button
      class="rounded-full w-16 h-16 bg-alpha hover:scale-110 text-white"
      on:click={bodySettings}
    >
      Body
    </button>
  </div>
</div>
