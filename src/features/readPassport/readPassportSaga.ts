import { PayloadAction } from '@reduxjs/toolkit';
import { IUploadResponse } from 'models/upload/extractpdf';
import { IStartResponse } from 'models/upload/extractpdf';
import { readPassportAction } from './readPassportSlice';
import { PDF_TOKEN } from 'constants/index';
import { IAuthResponse } from 'models/upload/extractpdf';
import { call, cancel, fork, put, take } from "redux-saga/effects";
import readPDFApi from 'api/readPDFApi';
import { toast } from 'react-toastify';
import { Task } from 'redux-saga';
import { push } from 'redux-first-history';

function* handleRead(file: File) {
    try {
        const resposne: IAuthResponse = yield call(readPDFApi.auth);
        localStorage.setItem(PDF_TOKEN, resposne.token);

        const startResponse: IStartResponse = yield call(readPDFApi.start);
        yield put(readPassportAction.startSuccess(startResponse));

        const uploadResponse: IUploadResponse = yield call(readPDFApi.upload, { task: startResponse.task, file });
        yield put(readPassportAction.uploadSucess(uploadResponse));

        yield call(readPDFApi.process, { task: startResponse.task, tool: 'extract', files: [{ server_filename: uploadResponse.server_filename, filename: file.name }] });

        yield call(readPDFApi.download, startResponse.task);

        yield call(handleDone);

        yield put(push('/wms/psv'));
    } catch {
        yield put(push('/wms/psv'));
        yield put(readPassportAction.cancel());
    }
}

function* handleDone() {
    localStorage.removeItem(PDF_TOKEN);
    yield put(readPassportAction.done());
}

function* watchReadPDFFlow() {
    while (true) {
        const actionReadPDF: PayloadAction<File> = yield take(readPassportAction.readPDF.type);
        const taskReadPDF: Task<any> = yield fork(handleRead, actionReadPDF.payload);

        yield take(readPassportAction.cancel.type);
        yield cancel(taskReadPDF);
    }
}

export default function* readPassportSaga() {
    yield fork(watchReadPDFFlow);
}