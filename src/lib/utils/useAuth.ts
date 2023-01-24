import { goto } from '$app/navigation'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type User,
  type UserCredential,
} from 'firebase/auth'
import { readable } from 'svelte/store'
import { auth } from './useFirebase'

const createUserStore = () => {
  const { subscribe } = readable<User | null>(undefined, (set) => onAuthStateChanged(auth, set))

  const known = new Promise<void>((resolve) => {
    let unsub = () => {}
    unsub = subscribe((user) => {
      if (user !== undefined) {
        resolve()
        unsub()
      }
    })
  })

  return { subscribe, known }
}

export const user = createUserStore()

const register = async (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((u: UserCredential) => {
        resolve(u.user)
      })
      .catch((error) => {
        reject(error)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const login = async (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((u: UserCredential) => {
        resolve(u.user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const logout = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        goto('/')
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const restoreUser = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((u: User | null) => {
      if (u) {
        resolve()
      } else {
        resolve()
      }
    })
  })
}

const protect = () => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      console.log(user)
      return true
    } else {
      goto('/auth/login')
    }
  })
}

export { register, login, logout, restoreUser, protect }
