
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyABsG5PXwo8T8Lby5ydce-rKCOcKnt-2-c",
  authDomain: "beaver-facts.firebaseapp.com",
  projectId: "beaver-facts",
  storageBucket: "beaver-facts.firebasestorage.app",
  messagingSenderId: "59561754137",
  appId: "1:59561754137:web:bc21e6d16baa6827603488",
  measurementId: "G-C24DLQWRLY"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
