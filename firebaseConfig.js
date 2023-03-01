import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore,doc,getDocs, collection} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA3K3rmsRzX-1Yf2Fb7hWCGkvjxhXIOGPg",
  authDomain: "next-authh.firebaseapp.com",
  projectId: "next-authh",
  storageBucket: "next-authh.appspot.com",
  messagingSenderId: "1031838106797",
  appId: "1:1031838106797:web:b8f343d25d04e64724b224"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth();
export const EventRef = collection(db,"events");
export const userRef = collection(db,"users");
export const storage = getStorage(app);