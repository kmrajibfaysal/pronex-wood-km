// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDYruoNu-RoQ4wO0Xn8GG-Kvkqh6In3MpA',
    authDomain: 'pronex-wood.firebaseapp.com',
    projectId: 'pronex-wood',
    storageBucket: 'pronex-wood.appspot.com',
    messagingSenderId: '168718637372',
    appId: '1:168718637372:web:5219e9f1aadfd43ada2639',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
