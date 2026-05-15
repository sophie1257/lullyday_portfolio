import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBGcR2R7Lt9eSsE6ges0FvLLxG0-PH9nRE',
  authDomain: 'lullyday-706e6.firebaseapp.com',
  projectId: 'lullyday-706e6',
  storageBucket: 'lullyday-706e6.firebasestorage.app',
  messagingSenderId: '549745127354',
  appId: '1:549745127354:web:3ca30be568fe9915aaf783',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)