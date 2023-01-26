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
  import { loadingObjects } from '$lib/utils/stores'
  import LoadingObjects from '$lib/components/LoadingObjects.svelte'
  export let activeTailName, activeEarsName, activeEyesName, activeBodyCol, activeEyesCol
  let canvas
  let camera, controls, renderer, cameraTarget, directionalLightA, directionalLightB, ambientLight
  let progress = 0

  $: innerHeight = 0
  $: innerWidth = 0
  const loadingManager = new LoadingManager()
  const gltfLoader = new GLTFLoader(loadingManager)
  const scene = new Scene()

  $: {
    if ($tails.length === 1) {
      scene.add($tails[0].tail)
    }
  }

  $: {
    if ($ears.length === 1) {
      scene.add($ears[0].ears)
    }
  }

  $: {
    if ($eyes.length === 1) {
      scene.add($eyes[0].eyes)
    }
  }

  $: {
    if ($bodies.length === 1 && $tails.length === 1 && $ears.length === 1) {
      changeBodyColor(activeBodyCol)
    }
  }

  $: {
    if ($eyes.length === 1) {
      changeEyesColor(activeEyesCol)
    }
  }

  const clearScene = (scene) => {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0])
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
    loadTail(gltfLoader, scene, activeTailName)
    loadBody(gltfLoader, scene)
    loadEars(gltfLoader, scene, activeEarsName)
    loadNose(gltfLoader, scene)
    loadMane(gltfLoader, scene)
    loadEyes(gltfLoader, scene, activeEyesName)
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
    camera.position.set(-4, 1.5, 4)
    camera.updateProjectionMatrix()
    scene.add(camera)

    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = true

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
    requestAnimationFrame(animate)
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

  const changeEyesColor = (color) => {
    $eyes.map((e) => {
      e.eyes.children.map((p) => {
        if (p.name.includes('pupil')) {
          p.material.color.set(color)
        }
      })
    })
  }

  const resize = () => {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth / 1.2, innerHeight / 1.2)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={resize} />

<div class="flex flex-col md:static">
  <canvas bind:this={canvas} />
  {#if $loadingObjects}
    <LoadingObjects {progress} />
  {/if}
</div>
