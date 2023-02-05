import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCCxd37pKlwMLdsUOhH-SpfFW3qTFLoONY",
    authDomain: "pokefetch-42cab.firebaseapp.com",
    projectId: "pokefetch-42cab",
    storageBucket: "pokefetch-42cab.appspot.com",
    messagingSenderId: "245825162736",
    appId: "1:245825162736:web:2c6e0068e93dd403692135"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);