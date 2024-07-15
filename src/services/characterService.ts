import { collection, getDocs, query, where } from "firebase/firestore";
import firebaseService from "./firebaseService";
import { Character } from "../models/Character";

export async function getCharactersByUserId(userId: string): Promise<Character[]> {
    const q = query(collection(firebaseService.database, 'characters'), where("status.userId", "==", userId));
    const querySnapshot = await getDocs(q);
    let result: Character[] = [];
    querySnapshot.forEach(doc => {
        result.push(Character.fromDataOld(doc.data()));
    });
    console.log(result);
    
    return result;
}