import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRWnovU0y_fyAfb2v1VnIlznd7OF9vL-0",
    authDomain: "dnd-character-sheet-2023.firebaseapp.com",
    projectId: "dnd-character-sheet-2023",
    storageBucket: "dnd-character-sheet-2023.appspot.com",
    messagingSenderId: "321826372250",
    appId: "1:321826372250:web:c7807266f90beed2117d23"
};

class FirebaseService {
    public auth: any;
    public provider: any
    public database: any
    public static instance: any

    constructor() {
        if (!FirebaseService.instance) {
            const app = initializeApp(firebaseConfig);
            this.auth = getAuth(app);
            this.provider = new GoogleAuthProvider();
            this.database = getFirestore(app);
            FirebaseService.instance = this;
        }
        return FirebaseService.instance;
    }
}

const instance = new FirebaseService();
Object.freeze(instance);
export default instance;

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const database = getFirestore(app);

// export { auth, provider, database, signInWithPopup, signOut };