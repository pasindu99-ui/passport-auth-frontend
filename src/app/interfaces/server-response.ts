export interface IImageItem {

    file_id?: string;
    file_name?: string;
    mime_type?: string;
}

export interface IServerResponse {
    error?: boolean;
    message?: string;
    data?: IImageItem[];
}