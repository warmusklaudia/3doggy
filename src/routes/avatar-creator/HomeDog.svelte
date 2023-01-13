<script lang="js">
  //@ts-nocheck
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { onMount } from 'svelte'

  let canvas
  let obj
  let headNumber = 1
  let headObj
  let head, head1, head2
  let body, body1, body2

  $: innerHeight = 0
  $: innerWidth = 0
  const gltfLoader = new GLTFLoader()
  //Scene
  const scene = new THREE.Scene()

  onMount(() => {
    console.log(gltfLoader)

    //Models
    // gltfLoader.load('../../../src/models/dog/doggy1.glb', (gltf) => {
    //   obj = gltf.scene.children[0]
    //   console.log(obj)
    //   console.log('success')
    //   gltf.scene.scale.set(1, 1, 1)
    //   gltf.scene.position.set(0, 1.5, 1)
    //   scene.add(gltf.scene)
    // })

    gltfLoader.load('../../../src/models/nose_only.gltf', (gltf) => {
      obj = gltf.scene.children[0]
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(gltf.scene)
    })

    gltfLoader.load('../../../src/models/body1.gltf', (gltf) => {
      obj = gltf.scene.children[0]
      body = gltf.scene
      body1 = gltf.scene
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(gltf.scene)
    })

    gltfLoader.load('../../../src/models/body2.gltf', (gltf) => {
      obj = gltf.scene.children[0]
      body = gltf.scene
      body2 = gltf.scene
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
    })

    gltfLoader.load('../../../src/models/mane1.gltf', (gltf) => {
      obj = gltf.scene.children[0]
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(gltf.scene)
    })

    gltfLoader.load('../../../src/models/head1.gltf', (gltf) => {
      head = gltf.scene
      head1 = gltf.scene
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(head)
    })

    gltfLoader.load('../../../src/models/head2.gltf', (gltf) => {
      head = gltf.scene
      head2 = gltf.scene
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      // scene.add(head)
    })

    gltfLoader.load('../../../src/models/eyes1.gltf', (gltf) => {
      obj = gltf.scene.children[0]
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(gltf.scene)
    })

    gltfLoader.load('../../../src/models/tongue1.gltf', (gltf) => {
      obj = gltf.scene.children[0]
      console.log(obj)
      console.log('success')
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(0, 1.5, 1)
      scene.add(gltf.scene)
    })

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
    // controls.rotateSpeed = 8
    controls.enableDamping = true
    // controls.autoRotate = true
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
  const changeBodyColor = () => {
    let randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
    body2.children[0].material.color.set(randomColor)
    body1.children[0].material.color.set(randomColor)
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

  const changeHead1 = () => {
    scene.remove(head2)
    scene.add(head1)
  }

  const changeHead2 = () => {
    scene.remove(head1)
    scene.add(head2)
  }

  const changeBody1 = () => {
    scene.remove(body2)
    scene.add(body1)
  }
  const changeBody2 = () => {
    scene.remove(body1)
    scene.add(body2)
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="flex flex-col">
  <canvas bind:this={canvas} class="w-full" />
  <div class="flex justify-evenly">
    <button on:click={changeEyesColor(obj)}>Eyes and nose</button>
    <button on:click={changeBodyColor}>Coat</button>
    <button on:click={changeTongueColor(obj)}>Tongue</button>
    <button on:click={changeManeColor(obj)}>Mane</button>
    <button on:click={changeHead1}>Head 1</button>
    <button on:click={changeHead2}>Head 2</button>
    <button on:click={changeBody1}>Body 1</button>
    <button on:click={changeBody2}>Body 2</button>
  </div>
</div>
