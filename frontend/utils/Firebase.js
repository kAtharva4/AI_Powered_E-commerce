import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-bdc2c.firebaseapp.com",
  projectId: "loginonecart-bdc2c",
  storageBucket: "loginonecart-bdc2c.firebasestorage.app",
  messagingSenderId: "1027513300452",
  appId: "1:1027513300452:web:b4d9b5fe3162e31ffe43f1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

