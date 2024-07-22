import { User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import firebaseService from './firebaseService';
import { AdventurerUser } from '../models/AdventurerUser';

export async function checkUserExistsSnapshot(user: User): Promise<AdventurerUser> {
    return new Promise((resolve) => {
        onSnapshot(doc(firebaseService.database, 'users', user.uid), (doc) => {
            resolve(AdventurerUser.fromData(user.uid, doc.data()));
        });
    });
}