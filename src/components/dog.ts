//@ts-nocheck
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

window.onload = function () {
  /**
   * Base
   */

  // Canvas
  const canvas = document.querySelector('canvas.webgl')

  // Scene
  const scene = new THREE.Scene()

  //raycast

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()

  const onPointerMove = (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    pointer.y = (e.clientY / window.innerHeight) * 2 + 1

    const intersects = raycaster.intersectObjects(scene.children)
    for (let i = 0; i < intersects.length; i++) {
      console.log(intersects[i])
      intersects[i].object.material.color.set(0x000ff)
    }
  }

  /**
   * Models
   */
  const dracoloader = new DRACOLoader()
  dracoloader.setDecoderPath('./draco/')

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoloader)

  gltfLoader.load('./models/retro_computer/scene.gltf', (gltf) => {
    gltf.scene.scale.set(3, 3, 3)
    scene.add(gltf.scene)
  })

  /**
   * Lights
   */
  const ambientLight = new THREE.AmbientLight(0xf0f2d4, 0.8)
  scene.add(ambientLight)

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
  })
  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
  camera.position.set(1.75, -0.023, 4.21)
  camera.rotation.set(0.31, 0.85, -0.23)
  scene.add(camera)

  // Controls

  const controls = new OrbitControls(camera, canvas)
  controls.target.set(0, 0, 0)
  controls.rotateSpeed = 10
  controls.enableDamping = true
  controls.enableZoom = true
  controls.autoRotate = true

  /**
   * Renderer
   */

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const tick = () => {
    controls.update()
    raycaster.setFromCamera(pointer, camera)
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }
  window.addEventListener('pointermove', (e) => {
    onPointerMove(e)
  })
  tick()
}
