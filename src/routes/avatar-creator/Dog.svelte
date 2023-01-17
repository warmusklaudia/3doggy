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

  let canvas
  let head, head1, head2
  let x
  let camera, controls, renderer, cameraTarget

  let showTails = false
  let showEars = false

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
    //Lights
    const directionalLightA = new DirectionalLight('#ffffff', 1)
    directionalLightA.position.set(-0.5, 1, 2.25)
    scene.add(directionalLightA)

    const directionalLightB = new DirectionalLight('#ffffff', 1)
    directionalLightB.position.set(0.5, 1, -2.25)
    scene.add(directionalLightB)

    const ambientLight = new AmbientLight('#FFFEFC', 1.5)
    scene.add(ambientLight)

    window.addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth / 1.25, innerHeight / 1.25)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    //Camera
    camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 90)
    camera.position.set(-4, 1.5, 4)

    scene.add(camera)

    //Controls
    controls = new OrbitControls(camera, canvas)
    // controls.rotateSpeed = 8
    controls.enableDamping = true
    // controls.autoRotate = true
    controls.enablePan = false
    controls.enableZoom = false

    //Renderer
    renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: true,
    })
    renderer.setSize(innerWidth / 1.25, innerHeight / 1.25)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.physicallyCorrectLights = true

    //Animate
    const tick = () => {
      controls.update()
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  })
  const changeTailColor = () => {
    let randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
    tails.map((t) => {
      t.tail.children[0].material.color.set(randomColor)
    })
  }

  const animate = () => {
    controls.update()
    camera.position.lerp(cameraTarget, 0.05)
    renderer.render(scene, camera)
    console.log(camera.position)
    let x = window.requestAnimationFrame(animate)
    if (camera.position.distanceTo(cameraTarget) < 0.01) {
      window.cancelAnimationFrame(x)
    }
  }

  const tailsSettings = () => {
    cameraTarget = new Vector3(-4, 2, -4)
    showEars = false
    showTails = !showTails
    if (showTails) {
      animate()
    }
    controls.update()
  }

  const earsSettings = () => {
    cameraTarget = new Vector3(0, 2, 5.5)
    showTails = false
    showEars = !showEars
    if (showEars) {
      animate()
    }
    controls.update()
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
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="md:relative">
  <canvas bind:this={canvas} class="mt-10" />
  <div class="">
    {#if showTails}
      <Tails {changeTail} {scene} />
    {/if}
    {#if showEars}
      <Ears {changeEars} {scene} />
    {/if}
  </div>
  <div class="flex justify-evenly rouded-full -mt-10">
    <button on:click={tailsSettings}>
      <img
        class="rounded-full w-20 h-20 object-cover hover:scale-110"
        src="../../../src/lib/images/bodyParts/Tail.jpg"
        alt="Tails"
      />
    </button>
    <button on:click={earsSettings}>
      <img
        class="rounded-full w-20 h-20 object-cover hover:scale-110"
        src="../../../src/lib/images/bodyParts/Ears.jpg"
        alt="Ears"
      /></button
    >
  </div>
</div>
