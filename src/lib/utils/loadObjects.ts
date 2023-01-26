import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { green, lightBrown } from './colors'
import {
  activeBodyColor,
  activeEyesColor,
  bodies,
  ears,
  eyes,
  manes,
  noses,
  tails,
  tongues,
} from './parts'

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

const loadTail = async (gltfLoader: GLTFLoader, scene: Scene, tailName?: string) => {
  tails.update((tail) => {
    tail = tail.filter(() => false)
    return tail
  })
  if (tailName) {
    if (tailName === 'tail1') {
      gltfLoader.load('/models/shiba/tail/tail1.gltf', async (gltf) => {
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
    } else if (tailName === 'tail3') {
      gltfLoader.load('/models/shiba/tail/tail3.gltf', async (gltf) => {
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
  }
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

const loadEars = (gltfLoader: GLTFLoader, scene: Scene, earsName: string) => {
  ears.update((ear) => {
    ear = ear.filter(() => false)
    return ear
  })
  if (earsName) {
    if (earsName === 'ears1') {
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
    } else if (earsName === 'ears2') {
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
    } else if (earsName === 'ears3') {
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
  } else {
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
}

const loadEyes = (gltfLoader: GLTFLoader, scene: Scene, eyesName: string) => {
  activeEyesColor.set(green)
  eyes.update((eye) => {
    eye = eye.filter(() => false)
    return eye
  })

  if (eyesName) {
    if (eyesName === 'eyes1') {
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
    } else if (eyesName === 'eyes2') {
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
    } else if (eyesName === 'eyes3') {
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
  } else {
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
