import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX2UjnLLvvQgY1xe9sakFL4bp3SYi65Do",
  authDomain: "shanmukha-online-classes.firebaseapp.com",
  projectId: "shanmukha-online-classes",
  storageBucket: "shanmukha-online-classes.firebasestorage.app",
  messagingSenderId: "808016114696",
  appId: "1:808016114696:web:86a1c70d2f70009691cdbd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);