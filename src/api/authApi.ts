import { ILoginPayload, ILoginResponse } from 'models/auth/auth';
import queryString from 'query-string';
import { axiosClient } from "./axiosClient";

const authApi = {
    signIn(credentials: ILoginPayload): Promise<ILoginResponse> {

        const url = `/auth/realms/bfms/protocol/openid-connect/token`

        return axiosClient.post(url,
            queryString.stringify({
                ...credentials,
                grant_type: 'password',
                client_id: 'frontend'
            }),
            {
                headers: { 
                  "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
    },
};

export default authApi