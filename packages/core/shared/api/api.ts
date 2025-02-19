import axios, { CreateAxiosDefaults } from 'axios';

import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

export const createApi = (config?: CreateAxiosDefaults) => {
    return axios.create({
        ...config,
        baseURL: __API__,
        headers: {
            authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY) || '',
            'Content-Type': 'application/json',
        },
        transformRequest: [
            (data, headers) => {
                if (headers) {
                    headers.authorization =
          localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';
                }
                return JSON.stringify(data);
            },
        ],
    });
};
