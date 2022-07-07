import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVtVN0fUM3FERRgUvMW8wWvHD9aH0fDnY",
  authDomain: "blogs-ca5b2.firebaseapp.com",
  projectId: "blogs-ca5b2",
  storageBucket: "blogs-ca5b2.appspot.com",
  messagingSenderId: "408519887867",
  appId: "1:408519887867:web:4d0d00d8b0c9e42ed7995e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)