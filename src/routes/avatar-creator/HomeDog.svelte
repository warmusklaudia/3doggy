<script lang="js">
  //@ts-nocheck
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { onMount } from 'svelte'

  let canvas
  let obj

  $: innerHeight = 0
  $: innerWidth = 0

  onMount(() => {
    const gltfLoader = new GLTFLoader()
    console.log(gltfLoader)

    //Models
    gltfLoader.load('../../../src/models/dog/doggy1.glb', (gltf) => {
      obj = gltf.scene.children[0]
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(gltf.scene)
    })

    //Scene
    const scene = new THREE.Scene()

    //Lights
    const directionalLightA = new THREE.DirectionalLight('#ffffff', 1)
    directionalLightA.position.set(-0.5, 1, 2.25)
    scene.add(directionalLightA)

    const directionalLightB = new THREE.DirectionalLight('#ffffff', 1)
    directionalLightB.position.set(0.5, 1, -2.25)
    scene.add(directionalLightB)

    const ambientLight = new THREE.AmbientLight('#FFFEFC', 1.5)
    scene.add(ambientLight)

    window.addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth / 1.5, innerHeight / 1.5)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      console.log(innerWidth, innerHeight)
    })

    // resize(innerWidth, innerHeight)

    // const resize = (width, height) => {
    //   // renderer.setSize(width, height)
    //   camera.aspect = width / height
    //   camera.updateProjectionMatrix()
    //   console.log(width, height)
    // }

    //Camera
    const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 90)
    camera.position.set(-4, 2, 4)
    scene.add(camera)

    //Controls
    const controls = new OrbitControls(camera, canvas)
    controls.rotateSpeed = 8
    controls.enableDamping = true
    controls.autoRotate = true
    controls.enablePan = false
    controls.enableZoom = false

    //Renderer
    const renderer = new THREE.WebGLRenderer({
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
  const changeFurColor = (gltf) => {
    obj.children[0].material.color.set(
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
    )
  }
  const changeEyesColor = (gltf) => {
    obj.children[3].material.color.set(
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
    )
  }
  const changeTongueColor = (gltf) => {
    obj.children[2].material.color.set(
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
    )
  }
  const changeManeColor = (gltf) => {
    obj.children[4].material.color.set(
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
    )
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="flex flex-col">
  <canvas bind:this={canvas} class="w-full" />
  <div class="flex justify-evenly">
    <button on:click={changeEyesColor(obj)}>Eyes and nose</button>
    <button on:click={changeFurColor(obj)}>Coat</button>
    <button on:click={changeTongueColor(obj)}>Tongue</button>
    <button on:click={changeManeColor(obj)}>Mane</button>
  </div>
</div>
