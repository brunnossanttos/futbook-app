export interface IAvatarHeader {
    id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    pickupSoccerId: string | null;
    avatarUrl: string;
    headerUrl: string;
}

export interface IUser {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    nickname: string;
    email: string;
    password: string;
    shirtNumber: string;
    position: string;
    cellphone: string;
    birthDate: string;
    googleId: string;
    appleId: string;
    AvatarHeader: IAvatarHeader[];
}
