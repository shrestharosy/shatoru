export interface ICreateDriverPayload {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IDriverResponse {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
}
