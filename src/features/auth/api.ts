import axiosInstance from "@services/axiosInstance";

import { AuthAccessTokenType, AuthFormType } from "./types";
import { requestUrl } from "@services/requestUrl";

export const registerUserApi = async (formData: AuthFormType) => {
    const res = await axiosInstance.post(requestUrl.register, formData);
    return res;
};

export const loginUserApi = async (formData: AuthFormType) => {
    const res = await axiosInstance.post(requestUrl.login, formData);
    return res;
};

export const checkAuthApi = async (accessToken: AuthAccessTokenType) => {
    const res = await axiosInstance.post(requestUrl.checkAuth, accessToken);
    return res;
};
