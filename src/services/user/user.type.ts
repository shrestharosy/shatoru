export interface IUser {
    email: string;
    first_name: string;
    last_name: string;
    role: RoleEnum;
}

export enum RoleEnum {
    ADMIN = 'Admin',
    DRIVER = 'Driver',
}
