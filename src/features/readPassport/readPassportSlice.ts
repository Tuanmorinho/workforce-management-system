import { IStartResponse, IUploadResponse, IDeleteResponse } from 'models/upload/extractpdf';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

export interface IReadFileState extends IStartResponse, IUploadResponse, IDeleteResponse {
    reading: boolean;
    result: any;
}

const initialState: IReadFileState = {
    reading: false,
    task: '',
    server: '',
    server_filename: '',
    success: false,
    result: undefined
};
  

export const readPassportSlice = createSlice({
    name: 'readPassport',
    initialState,
    reducers: {
        readPDF(state, action: PayloadAction<File>) {
            state.reading = true;
        },

        startSuccess(state, action: PayloadAction<IStartResponse>) {
            state.task = action.payload.task;
            state.server = action.payload.server;
        },

        uploadSucess(state, action: PayloadAction<IUploadResponse>) {
            state.server_filename = action.payload.server_filename;

            state.reading = false;
            state.success = true;
            
        },

        downloadSuccess(state) {
            state.reading = false;
            state.success = true;
        },

        readFailed(state) {
            state.reading = false;
            state.success = false;
            state.task = '';
            state.server = '';
            state.server_filename = '';

        },

        done(state) {
            state.reading = false;
            state.task = '';
            state.server = '';
            state.server_filename = '';
            state.success = true;
        },

        setResult(state, action: PayloadAction<any>) {
            state.result = action.payload;
        },
    }
});

export const readPassportAction = readPassportSlice.actions;

export const selectIsReading = (state: RootState) => state.readPDF.reading;
export const selectIsReadingSuccess = (state: RootState) => state.readPDF.success;

export default readPassportSlice.reducer;