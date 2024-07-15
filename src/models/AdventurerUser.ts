export class AdventurerUser {
    uid: string = '';
    displayName: string = '';
    progressive: number = 0;
    role: ROLE = ROLE.USER;
    characters: any[] = [];
    // Da finire

    constructor() {}

    public static fromData(uid: string, data: any): AdventurerUser {
        const user = new AdventurerUser();
        user.uid = uid || '';
        user.displayName = data.displayName || '';
        user.progressive = data.progressive || 0;
        user.role = data.role === 'admin' ? ROLE.ADMIN : ROLE.USER;
        user.characters = data.characters || [];
        return user;
    }
}

export enum ROLE {
    ADMIN = 'admin',
    USER = 'user'
}