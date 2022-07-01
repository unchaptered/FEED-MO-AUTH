export interface IException extends Error {

    name: string;
    message: string;
    statusCode: number;

}