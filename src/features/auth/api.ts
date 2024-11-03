import axios from "axios";
import { requestUrl } from "@services/requestUrl";
import { AuthFormType } from "./types";

export const registerUserApi = async (formData: AuthFormType) => {
    const res = await axios.post(requestUrl.register, formData);
    return res;
};

export const loginUserApi = async (formData: AuthFormType) => {
    const res = await axios.post(requestUrl.login, formData);
    return res;
};
