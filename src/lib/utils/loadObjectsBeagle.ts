import { writable } from 'svelte/store'
import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { lightBrown, black, red } from './colors'
import {
  activeBodyColor,
  activeCollarColor,
  bodies,
  collars,
  ears,
  eyes,
  noses,
  tails,
} from './parts'

const loadBody = (gltfLoader: GLTFLoader, scene: Scene) => {
  activeBodyColor.set(lightBrown)
  gltfLoader.load('/models/beagle/body/body1.gltf', (gltf) => {
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

const loadEyes = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('/models/beagle/eyes/eyes1.gltf', (gltf) => {
    eyes.update((eye) => {
      eye.pop()
      eye.push({ name: 'eyes1', eyes: gltf.scene })
      return eye
    })
    gltf.scene.name = 'eyes'
    //@ts-ignore
    gltf.scene.children[0].material.color.set(black)
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadNose = (gltfLoader: GLTFLoader, scene: Scene) => {
  gltfLoader.load('/models/beagle/nose/nose1.gltf', (gltf) => {
    noses.update((nose) => {
      nose.pop()
      nose.push({ name: 'nose1', nose: gltf.scene })
      return nose
    })
    gltf.scene.name = 'nose'
    //@ts-ignore
    gltf.scene.children[0].material.color.set(black)
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadCollar = (gltfLoader: GLTFLoader, scene: Scene) => {
  activeCollarColor.set(red)
  gltfLoader.load('/models/beagle/collar/collar1.gltf', (gltf) => {
    collars.update((collar) => {
      collar.pop()
      collar.push({ name: 'collar1', collar: gltf.scene })
      return collar
    })
    gltf.scene.name = 'collar'
    //@ts-ignore
    gltf.scene.children[0].material.color.set(red)
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, 1.5, 1)
    scene.add(gltf.scene)
  })
}

const loadTail = async (gltfLoader: GLTFLoader, scene: Scene, tailName?: string) => {
  tails.update((tail) => {
    tail = tail.filter(() => false)
    return tail
  })
  if (tailName) {
    if (tailName === 'tail1') {
      gltfLoader.load('/models/beagle/tails/tail1.gltf', async (gltf) => {
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
    } else if (tailName === 'tail2') {
      gltfLoader.load('/models/beagle/tails/tail2.gltf', (gltf) => {
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
    } else if (tailName === 'tail3') {
      gltfLoader.load('/models/beagle/tails/tail3.gltf', async (gltf) => {
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
    }
  } else {
    gltfLoader.load('/models/beagle/tails/tail1.gltf', (gltf) => {
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
    gltfLoader.load('/models/beagle/tails/tail2.gltf', (gltf) => {
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
    gltfLoader.load('/models/beagle/tails/tail3.gltf', (gltf) => {
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
  }
  return tails
}

const loadEars = (gltfLoader: GLTFLoader, scene: Scene, earsName: string) => {
  ears.update((ear) => {
    ear = ear.filter(() => false)
    return ear
  })
  if (earsName) {
    if (earsName === 'ears1') {
      gltfLoader.load('/models/beagle/ears/ears1.gltf', (gltf) => {
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
    } else if (earsName === 'ears2') {
      gltfLoader.load('/models/beagle/ears/ears2.gltf', (gltf) => {
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
    } else if (earsName === 'ears3') {
      gltfLoader.load('/models/beagle/ears/ears3.gltf', (gltf) => {
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
  } else {
    gltfLoader.load('/models/beagle/ears/ears1.gltf', (gltf) => {
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
    gltfLoader.load('/models/beagle/ears/ears2.gltf', (gltf) => {
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
    gltfLoader.load('/models/beagle/ears/ears3.gltf', (gltf) => {
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
}

export {
  loadBody,
  loadTail,
  loadEars,
  loadEyes,
  loadNose,
  loadCollar,
  bodies,
  tails,
  ears,
  collars,
}
