import { DEFAULT_ERROR_CODE, SUCCESS_CODE, TIMEOUT } from '@/constants';
import { niceTryAsync } from '@/utils';
import axios, { Method } from 'axios';

axios.interceptors.request.use(
    (config) => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        return config;
    },
    (error) => {
        console.log('error ===> ', error);
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('error ===> ', error);
        return Promise.reject(error);
    }
);

interface IRequest {
    url: string;
    headers: object;
    method: Method;
    param?: object;
    data?: object;
}

interface ISuccess<T> {
    code: 0;
    data: T;
    success: true;
    msg: string;
    message: string;
}

interface IError {
    code: number;
    data: null;
    success: false;
    msg: string;
    message: string;
}

const request = async <T = any>(config: IRequest) => {
    const res = await niceTryAsync(
        axios<ISuccess<T> | IError>({
            baseURL: 'http://localhost:23333',
            timeout: TIMEOUT,
            ...config
        })
    );
    if (res?.data?.code !== SUCCESS_CODE) {
        const { code = DEFAULT_ERROR_CODE, message = 'no message' } = res?.data || {};
        const error: IError = {
            code,
            data: null,
            message,
            msg: message,
            success: false
        };
        return error;
    }
    const success: ISuccess<T> = {
        ...(res.data as ISuccess<T>),
        msg: res.data.message,
        success: true
    };
    return success;
};

export default request;
