import authApi from 'api/authApi';
import { ACCESS_TOKEN } from 'constants/index';
import { IAuthUser, ILoginPayload, ILoginResponse } from 'models/auth/auth';
import { PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { push } from 'redux-first-history';
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authAction } from "./authSlice";

function* handleLogin(payload: ILoginPayload) {
    try {
        const resposne: ILoginResponse = yield call(authApi.signIn, payload);
        localStorage.setItem(ACCESS_TOKEN, resposne.access_token);

        const decoded: Partial<IAuthUser> = jwtDecode(resposne.access_token);

        yield put(authAction.loginSuccess(decoded));
        yield put(push('/crm/home'));
    } catch (error) {
        console.log(error)
    }
}

function* handleLogout() {
    yield delay(500);
    localStorage.removeItem(ACCESS_TOKEN);
    yield put(push('/login'));
}

function* watchAuthFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem(ACCESS_TOKEN));

        if (!isLoggedIn) {
            const actionLogin: PayloadAction<ILoginPayload> = yield take(authAction.login.type);
            yield fork(handleLogin, actionLogin.payload);
        }

        yield take(authAction.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchAuthFlow);
}