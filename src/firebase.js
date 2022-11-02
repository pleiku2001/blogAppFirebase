// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV-0f5OFLDpg67VG-k8I-NBkXbcaw3OLA",
  authDomain: "blog-866bd.firebaseapp.com",
  projectId: "blog-866bd",
  storageBucket: "blog-866bd.appspot.com",
  messagingSenderId: "600796343745",
  appId: "1:600796343745:web:1212d50cce4042892a9340",
  measurementId: "G-RDBB2TJEJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    // const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const logout = () => {
  signOut(auth);
};

export const db= getFirestore(app)
export const auth = getAuth();
export const storage = getStorage(app);
