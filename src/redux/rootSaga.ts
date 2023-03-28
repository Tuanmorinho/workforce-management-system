import authSaga from 'features/auth/authSaga'
import readPassportSaga from 'features/readPassport/readPassportSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        authSaga(),
        readPassportSaga()
    ])    
}