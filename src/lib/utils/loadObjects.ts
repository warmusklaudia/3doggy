import { writable } from 'svelte/store'
import { LoadingManager, ObjectLoader, Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { green, lightBrown } from './colors'
import { activeBodyColor, activeEyesColor } from './parts'

let tails = writable([{}])
tails.update((tail) => {
  tail.pop()
  return tail
})
let bodies = writable([{}])
let tongues = writable([{}])
let ears = writable([{}])
let eyes = writable([{}])
eyes.update((eye) => {
  eye.pop()
  return eye
})
let noses = writable([{}])
let manes = writable([{}])

const loadBody = (gltfLoader: GLTFLoader, scene: Scene) => {
  activeBodyColor.set(lightBrown)
  gltfLoader.load('/models/shiba/body/body.gltf', (gltf) => {
    bodies.update((body) => {
      body.pop()
      body.push({ name: 'body1', body: gltf.scene })
      return body
    })
    gltf.scene.name = 'body'
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadTail = (gltfLoader: GLTFLoader, scene: Scene) => {
  tails.update((tail) => {
    tail = tail.filter(() => false)
    return tail
  })
  gltfLoader.load('/models/shiba/tail/tail1.gltf', (gltf) => {
    tails.update((tail) => {
      tail.pop()
      tail.push({ name: 'tail1', tail: gltf.scene })
      return tail
    })
    gltf.scene.name = 'tail1'
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('/models/shiba/tail/tail2.gltf', (gltf) => {
    tails.update((tail) => {
      tail.push({ name: 'tail2', tail: gltf.scene })
      return tail
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.name = 'tail2'
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('/models/shiba/tail/tail3.gltf', (gltf) => {
    tails.update((tail) => {
      tail.push({ name: 'tail3', tail: gltf.scene })
      return tail
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.name = 'tail3'
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  return tails
}

const loadTongue = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('/models/shiba/tongue/tongue.gltf', (gltf) => {
    tongues.update((tongue) => {
      tongue.pop()
      tongue.push({ name: 'tongue1', tongue: gltf.scene })
      return tongue
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set('#E7A6C3')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadNose = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('/models/shiba/nose/nose.gltf', (gltf) => {
    noses.update((nose) => {
      nose.pop()
      nose.push({ name: 'nose1', nose: gltf.scene })
      return nose
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set('#2C0D0C')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadMane = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('/models/shiba/mane/mane.gltf', (gltf) => {
    manes.update((mane) => {
      mane.pop()
      mane.push({ name: 'mane1', mane: gltf.scene })
      return mane
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set('#ffffff')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadEars = (gltfLoader: GLTFLoader, scene: Scene) => {
  ears.update((ear) => {
    ear = ear.filter(() => false)
    return ear
  })
  gltfLoader.load('/models/shiba/ears/ears1.gltf', (gltf) => {
    ears.update((ear) => {
      ear.push({ name: 'ears1', ears: gltf.scene })
      return ear
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.name = 'ears1'
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('/models/shiba/ears/ears2.gltf', (gltf) => {
    ears.update((ear) => {
      ear.push({ name: 'ears2', ears: gltf.scene })
      return ear
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.name = 'ears2'
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('/models/shiba/ears/ears3.gltf', (gltf) => {
    ears.update((ear) => {
      ear.push({ name: 'ears3', ears: gltf.scene })
      return ear
    })
    //@ts-ignore
    gltf.scene.children[0].material.color.set(lightBrown)
    gltf.scene.name = 'ears3'
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
}

const loadEyes = (gltfLoader: GLTFLoader, scene: Scene) => {
  activeEyesColor.set(green)
  eyes.update((eye) => {
    eye = eye.filter(() => false)
    return eye
  })
  gltfLoader.load('/models/shiba/eyes/eyes1.gltf', (gltf) => {
    eyes.update((eye) => {
      eye.push({ name: 'eyes1', eyes: gltf.scene })
      return eye
    })
    gltf.scene.name = 'eyes1'
    //@ts-ignore
    gltf.scene.children[1].material.color.set('#000000')
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('/models/shiba/eyes/eyes2.gltf', (gltf) => {
    eyes.update((eye) => {
      eye.push({ name: 'eyes2', eyes: gltf.scene })
      return eye
    })
    gltf.scene.name = 'eyes2'
    gltf.scene.scale.set(1, 1, 1)
    //@ts-ignore
    gltf.scene.children[1].material.color.set('#ffffff')
    //@ts-ignore
    gltf.scene.children[2].material.color.set(green)
    //@ts-ignore
    gltf.scene.children[3].material.color.set('#000000')
    //@ts-ignore
    gltf.scene.children[4].material.color.set('#ffffff')
    //@ts-ignore
    gltf.scene.children[5].material.color.set('#ffffff')
    //@ts-ignore
    gltf.scene.children[8].material.color.set('#000000')
    gltf.scene.position.set(0, 1.5, 1)
  })
  gltfLoader.load('/models/shiba/eyes/eyes3.gltf', (gltf) => {
    eyes.update((eye) => {
      eye.push({ name: 'eyes3', eyes: gltf.scene })
      return eye
    })
    gltf.scene.name = 'eyes3'
    gltf.scene.scale.set(1, 1, 1)
    //@ts-ignore
    gltf.scene.children[0].material.color.set('#ffffff')
    //@ts-ignore
    gltf.scene.children[1].material.color.set(green)
    //@ts-ignore
    gltf.scene.children[2].material.color.set('#000000')
    //@ts-ignore
    gltf.scene.children[3].material.color.set('#ffffff')
    //@ts-ignore
    gltf.scene.children[8].material.color.set('#000000')
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
