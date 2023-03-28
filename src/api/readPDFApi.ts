import { IAuthResponse, IDeleteResponse, IProcessResponse, IStartResponse, IUploadResponse, IDeletePayload, IProcessPayload, IUploadPayload } from "models/upload/extractpdf";
import { axiosClientPDF } from "./axiosClientPDF";

const readPDFApi = {
    auth(): Promise<IAuthResponse> {
        const url = `/v1/auth`;
        return axiosClientPDF.post(url, { public_key: 'project_public_c036e6ce4c7b966b3cdfd2ee586b1e52_Ci4v3a57a89729bea31b0a8ffd7024885e4e3' })
    },

    start(): Promise<IStartResponse> {
        const url = `/v1/start/extract`;
        return axiosClientPDF.get(url);
    },

    upload(payload: IUploadPayload): Promise<IUploadResponse> {
        const url = `/v1/upload`;
        return axiosClientPDF.post(url, payload, { headers: { 'Content-Type': 'multipart/form-data' } })
    },

    process(payload: IProcessPayload): Promise<Partial<IProcessResponse>> {
        const url = `/v1/process`
        return axiosClientPDF.post(url, payload)
    },

    download(task: string): Promise<any> {
        const url = `/v2/download/${task}`;
        return axiosClientPDF.get(url);
    },

    deleteFileUploaded(payload: IDeletePayload): Promise<IDeleteResponse> {
        const { task, server_filename } = payload
        const url = `/v1/upload/${task}/${server_filename}`;
        return axiosClientPDF.delete(url)
    }
};

export default readPDFApi