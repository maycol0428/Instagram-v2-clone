import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCArN04HXoLWmSjATcBrR2zoPhi8xSV6pY",
  authDomain: "instagram-v2-c2df0.firebaseapp.com",
  projectId: "instagram-v2-c2df0",
  storageBucket: "instagram-v2-c2df0.appspot.com",
  messagingSenderId: "750857667254",
  appId: "1:750857667254:web:6dd804019bf0b1a2e29c17",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
