import axios, { InternalAxiosRequestConfig } from "axios";

import { store } from "@app/store";
import { setNotAuthAction } from "@features/auth/slice";
import { getLocalStorage } from "@utils/localStorage";
import { api } from "./requestUrl";

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getLocalStorage("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            store.dispatch(setNotAuthAction());
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
