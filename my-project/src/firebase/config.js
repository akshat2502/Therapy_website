// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // For development - you'll need to replace these with your actual Firebase config
// const firebaseConfig = {
//   apiKey: "demo-api-key",
//   authDomain: "demo-project.firebaseapp.com",
//   projectId: "demo-project-id",
//   storageBucket: "demo-project.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "demo-app-id"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export const googleProvider = new GoogleAuthProvider();

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your actual Firebase project configuration for THERAPY-WEBSITE
const firebaseConfig = {
  apiKey: "AIzaSyB_Jne0-UHnV_XgOaRVwIMWZCkSmhT2S_4",
  authDomain: "therapy-website-bed8a.firebaseapp.com",
  projectId: "therapy-website-bed8a",
  storageBucket: "therapy-website-bed8a.firebasestorage.app",
  messagingSenderId: "59618574222",
  appId: "1:59618574222:web:b59da6e6f0326f0d50aedf",
  measurementId: "G-J23GJ87VWM"
};


// Initialize Firebase with your project's configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase services using your app instance
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
