import { initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { browserLocalPersistence, getAuth, setPersistence, type Auth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}
const app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)
setPersistence(auth, browserLocalPersistence)
console.log(app)
export { auth }
