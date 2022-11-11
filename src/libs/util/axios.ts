import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';
import Config from 'src/config';
import parseErrorMessage from 'src/libs/util/error';
import { STORAGE } from '../constants/storage';

const axiosInstance = axios.create({
    baseURL: Config.APP.BASE_URL,
    timeout: 0,
});

axiosInstance.interceptors.request.use(async (req) => {
    const token = await AsyncStorage.getItem(STORAGE.TOKEN);
    if (token) {
        req.headers['Authorization'] = `Token ${token}`;
        return req;
    } else {
        return req;
    }
});

interface IClientError {
    config: AxiosRequestConfig;
    request: XMLHttpRequest;
    response: undefined;
    message: string;
    stack: string;
}

function parseClientError(error: IClientError) {
    let parsedError = {
        message: 'Something went wrong',
        status: 'CLIENT_ERROR',
    };
    if (error.message === 'Network Error') {
        parsedError = {
            message: 'Network Error',
            status: 'CLIENT_ERROR',
        };
    }
    return parsedError;
}

axiosInstance.interceptors.response.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(
            error.response
                ? parseErrorMessage(error.response)
                : parseClientError(error)
        );
    }
);

export default axiosInstance;
