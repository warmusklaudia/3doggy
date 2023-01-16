import { Group, Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let tails: Object[] = []
let bodies: Object[] = []
let tongues: Object[] = []
let ears: Object[] = []
let eyes: Object[] = []
let noses: Object[] = []
let manes: Object[] = []

const loadBody = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/body/body.gltf', (gltf) => {
    bodies.push({ name: 'body1', body: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadTail = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/tail/tail1.gltf', (gltf) => {
    tails.push({ name: 'tail1', tail: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
  gltfLoader.load('src/lib/models/shiba/tail/tail2.gltf', (gltf) => {
    tails.push({ name: 'tail2', tail: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('src/lib/models/shiba/tail/tail3.gltf', (gltf) => {
    tails.push({ name: 'tail3', tail: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
}

const loadTongue = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/tongue/tongue.gltf', (gltf) => {
    tongues.push({ name: 'tongue1', tongue: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadNose = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/nose/nose.gltf', (gltf) => {
    noses.push({ name: 'nose1', nose: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadMane = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/mane/mane.gltf', (gltf) => {
    manes.push({ name: 'mane1', mane: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadEars = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/ears/ears1.gltf', (gltf) => {
    ears.push({ name: 'ears1', ears: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
  gltfLoader.load('src/lib/models/shiba/ears/ears2.gltf', (gltf) => {
    ears.push({ name: 'ears2', ears: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('src/lib/models/shiba/ears/ears3.gltf', (gltf) => {
    ears.push({ name: 'ears3', ears: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
}

const loadEyes = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('src/lib/models/shiba/eyes/eyes1.gltf', (gltf) => {
    eyes.push({ name: 'eyes1', eyes: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
  gltfLoader.load('src/lib/models/shiba/eyes/eyes2.gltf', (gltf) => {
    eyes.push({ name: 'eyes2', eyes: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('src/lib/models/shiba/eyes/eyes3.gltf', (gltf) => {
    eyes.push({ name: 'eyes3', eyes: gltf.scene })
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
}

export {
  loadTail,
  loadBody,
  loadTongue,
  loadEars,
  loadEyes,
  loadMane,
  loadNose,
  tails,
  bodies,
  tongues,
  ears,
  eyes,
  noses,
  manes,
}
