import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';
import { IAuthUser, ILoginPayload } from 'models/auth/auth';

export interface IAuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: Partial<IAuthUser>;
}

const initialState: IAuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined
};
  

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<ILoginPayload>) {
            state.logging = true;
        },

        loginSuccess(state, action: PayloadAction<Partial<IAuthUser>>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },

        loginFailed(state, action: PayloadAction<ILoginPayload>) {
            state.isLoggedIn = false;
            state.logging = false;
        },

        reUpdate(state, action: PayloadAction<Partial<IAuthUser>>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },

        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        }
    }
});

export const authAction = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.logging;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

export default authSlice.reducer;