import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRWnovU0y_fyAfb2v1VnIlznd7OF9vL-0",
    authDomain: "dnd-character-sheet-2023.firebaseapp.com",
    projectId: "dnd-character-sheet-2023",
    storageBucket: "dnd-character-sheet-2023.appspot.com",
    messagingSenderId: "321826372250",
    appId: "1:321826372250:web:c7807266f90beed2117d23"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };