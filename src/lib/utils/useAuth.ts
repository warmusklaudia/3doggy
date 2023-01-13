import { goto } from '$app/navigation'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
  type UserCredential,
} from 'firebase/auth'
import { writable } from 'svelte/store'
import { auth } from './useFirebase'

const user = writable<User | null>(null)

const setUser = (u: User | null) => {
  user.set(u)
}

const register = async (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((u: UserCredential) => {
        setUser(u.user)
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
        setUser(u.user)
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
        setUser(null)
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
        setUser(u)
        resolve()
      } else {
        resolve()
      }
    })
  })
}

if (auth) await restoreUser()

export { register, login, logout, setUser, restoreUser, user }
