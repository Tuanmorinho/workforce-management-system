export interface IAuthResponse {
    token: string;
}

export interface IStartResponse { 
    server: string;
    task: string 
}

export interface IUploadResponse { 
    server_filename: string;
}

export interface IProcessResponse { 
    download_filename: string; 
    filesize: number; 
    output_filesize: number; 
    output_filenumber: number; 
    output_extensions: string; 
    timer: string; 
    status: 'FileSuccess' | 'FileWaiting' | 'WrongPassword' | 'TimeOut' | 'ServerFileNotFound' | 'DamagedFile' | 'NoImages' | 'OutOfRange' | 'NonConformant' | 'UnknownError';
}

export interface IDeleteResponse {
    success: boolean;
}

export interface IUploadPayload { 
    task: string; 
    file: File;
}

export interface IProcessPayload {
    task: string;
    tool: string;
    files: Array<{server_filename: string; filename: string}>;
}

export interface IDeletePayload {
    task: string; 
    server_filename: string;
}