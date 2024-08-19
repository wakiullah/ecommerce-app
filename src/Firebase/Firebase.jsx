// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD80GA4ngcWibMbnr7qkbmJfWIMGI7wEGQ",
    authDomain: "ecom-21f54.firebaseapp.com",
    projectId: "ecom-21f54",
    storageBucket: "ecom-21f54.appspot.com",
    messagingSenderId: "863630021055",
    appId: "1:863630021055:web:b9a277ad43ea091857910a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)