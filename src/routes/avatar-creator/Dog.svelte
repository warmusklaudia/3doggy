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
  import Tail from '../../lib/components/Tail.svelte'

  let canvas
  let head, head1, head2
  let x
  let camera, controls, renderer, cameraTarget

  let showTails = false

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
      renderer.setSize(innerWidth / 1.5, innerHeight / 1.5)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      console.log(innerWidth, innerHeight)
    })

    //Camera
    camera = new PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 90)
    camera.position.set(-4, 2, 4)

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
    renderer.setSize(innerWidth / 1.5, innerHeight / 1.5)
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

  const changeHead1 = () => {
    scene.remove(head2)
    scene.add(head1)
  }

  const changeHead2 = () => {
    scene.remove(head1)
    scene.add(head2)
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
    animate()
    showTails = !showTails
    controls.update()
  }

  const earsSettings = () => {
    cameraTarget = new Vector3(0, 2, 5.5)
    animate()
    controls.update()
  }

  const changeTail = (name) => {
    x = tails.find((t) => t.name === name)
    tails.map((t) => {
      scene.remove(t.tail)
    })
    scene.add(x.tail)
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="flex flex-col">
  <canvas bind:this={canvas} class="w-full" />
  <div class="flex flex-col">
    {#if showTails}
      <Tail {changeTail} />
    {/if}
    <div class="flex gap-3 justify-evenly">
      <button on:click={tailsSettings}>Tails</button>
      <button on:click={earsSettings}>Ears</button>
    </div>
  </div>
</div>
