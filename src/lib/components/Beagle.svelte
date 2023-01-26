<script lang="js">
  //@ts-nocheck
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    AmbientLight,
    LoadingManager,
  } from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { onMount } from 'svelte'
  import { loadBody, loadTail, tails } from '$lib/utils/loadObjectsBeagle'

  import { loadingObjects } from '$lib/utils/stores'
  import LoadingObjects from '$lib/components/LoadingObjects.svelte'

  export let activeTailName

  let canvas
  let camera, controls, renderer, cameraTarget, directionalLightA, directionalLightB, ambientLight
  let progress = 0
  $: innerHeight = 0
  $: innerWidth = 0
  const loadingManager = new LoadingManager()
  const gltfLoader = new GLTFLoader(loadingManager)
  const scene = new Scene()

  //   $: {
  //     if ($tails.length === 3) {
  //       changeTail(activeTailName)
  //     }
  //   }

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
    loadBody(gltfLoader, scene)
    loadTail(gltfLoader, scene)

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

  const resize = () => {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth / 1.2, innerHeight / 1.2)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={resize} on:beforeunload={handleClick} />

<div class="flex flex-col md:static">
  <canvas bind:this={canvas} class="mt-10 -mb-32 md:-mb-0" />
  {#if $loadingObjects}
    <LoadingObjects {progress} />
  {/if}
</div>
