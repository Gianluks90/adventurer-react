import { collection, getDocs, doc, onSnapshot, query, where } from "firebase/firestore";
import firebaseService from "./firebaseService";
import { Character } from "../models/Character";

export async function getCharactersByUserId(userId: string): Promise<Character[]> {
    const q = query(collection(firebaseService.database, 'characters'), where("status.userId", "==", userId));
    const querySnapshot = await getDocs(q);
    let result: Character[] = [];
    querySnapshot.forEach(doc => {
        result.push(Character.fromDataOld(doc.data()));
    });
    return result;
}

export async function getCharacterByIdSnapshot(charId: string): Promise<Character> {
    return new Promise((resolve) => {
        onSnapshot(doc(firebaseService.database, 'characters', charId), (doc) => {
            resolve(Character.fromDataOld(doc.data()));
        });
    });
}