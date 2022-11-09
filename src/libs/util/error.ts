import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import { STORAGE } from '../constants/storage';

interface IAxiosErrorData {
    status: string;
    detail: string;
}

export interface IParsedError {
    message: string;
    status: number;
}

function parseClientError(error: AxiosResponse<IAxiosErrorData>): IParsedError {
    let parsedError = {
        message: 'Something is wrong in client end',
        status: error.status,
    };
    if (error.status === 403) {
        if (
            error.data.detail.includes(
                'Authentication credentials were not provided'
            )
        ) {
            // TODO logout
        }
        console.log(error.data.detail);
        parsedError.message = `Uh oh. Please log out.`;
    } else if (error.status === 400) {
        parsedError.message = error.data.detail;
    } else if (error.status === 401) {
        // TODO : signout

        parsedError.message = error.data.detail;
    } else if (error.status === 404) {
        parsedError.message = error.data.detail;
    } else if (error.status === 422) {
        parsedError.message = error.data.detail;
    }
    return parsedError;
}

function parseServerError(error: AxiosResponse<IAxiosErrorData>): IParsedError {
    let parsedError = {
        message: 'Something is wrong with the server',
        status: error.status,
    };
    return parsedError;
}

export default function parseErrorMessage(
    error: AxiosResponse<IAxiosErrorData>
): IParsedError {
    let parsedError = {
        message: 'Something went wrong',
        status: error.status,
    };
    if (`${error.status}`.charAt(0) === '4') {
        parsedError = parseClientError(error);
    } else if (`${error.status}`.charAt(0) === '5') {
        parsedError = parseServerError(error);
    }

    return parsedError;
}
