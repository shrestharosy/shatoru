import axios, { AxiosRequestConfig } from 'axios';
import Config from 'src/config';
import parseErrorMessage from 'src/libs/util/error';

const axiosInstance = axios.create({
    baseURL: Config.APP.BASE_URL,
    timeout: 0,
});

axiosInstance.interceptors.request.use((config) => {
    // get token
    // if (token) {
    // config.headers['Authorization'] = `Bearer ${accessToken}`;
    // return config;
    // } else {
    return config;
    // }
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
