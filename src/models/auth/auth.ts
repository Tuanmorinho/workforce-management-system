export interface ILoginPayload {
    username: string;
    password: string;
}

export interface ILoginResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    refresh_expires_in: number;
}

export interface IAuthUser {
    accessToken: string;
    email: string;
    preferred_username: string;
    given_name: string;
    sid: string;
    resource_access: {
        frontend: {
            roles: string[]
        }
    }
}