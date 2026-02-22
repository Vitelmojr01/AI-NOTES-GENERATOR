import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotesai.firebaseapp.com",
  projectId: "authexamnotesai",
  storageBucket: "authexamnotesai.firebasestorage.app",
  messagingSenderId: "479739317407",
  appId: "1:479739317407:web:78fe5b0da25535712f66aa",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
