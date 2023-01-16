import { Group, Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let obj: any
let body = {
  body1: new Group(),
  body2: new Group(),
  body3: new Group(),
}

let bodies: Object[] = []
let activeBody: Group = new Group()

const loadBody = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('../../../src/models/body1.gltf', (gltf) => {
    obj = gltf.scene.children[0]
    body.body1 = gltf.scene
    activeBody = gltf.scene
    bodies.push({ name: 'body1', body: gltf.scene })
    // console.log(obj)
    // console.log('success')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })

  gltfLoader.load('../../../src/models/body2.gltf', (gltf) => {
    obj = gltf.scene.children[0]
    body.body2 = gltf.scene
    bodies.push({ name: 'body2', body: gltf.scene })
    // console.log(obj)
    // console.log('success')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })

  gltfLoader.load('../../../src/models/body3.gltf', (gltf) => {
    obj = gltf.scene.children[0]
    body.body3 = gltf.scene
    // console.log(obj)
    // console.log('success')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  console.log(body)
}

export { loadBody, body, activeBody, bodies }
