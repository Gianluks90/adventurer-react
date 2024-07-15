import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import firebaseService from './firebaseService';
import { AdventurerUser } from '../models/AdventurerUser';

export async function checkUserExists(user: User): Promise<AdventurerUser> {
    const docRef = doc(firebaseService.database, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    return AdventurerUser.fromData(user.uid, docSnap.data());
}