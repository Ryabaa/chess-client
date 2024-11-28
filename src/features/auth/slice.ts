import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateType, AUTH, AuthFormType, AuthAccessTokenType, CheckAuthType } from "./types";
import { setLocalStorage } from "@utils/localStorage";

const authInitialState: AuthStateType = {
    isLoading: false,
    isAuthorized: false,
};

export const authSlice = createSlice({
    name: AUTH,
    initialState: authInitialState,
    reducers: {
        checkAuthAction: (state: AuthStateType, {}: PayloadAction<AuthAccessTokenType>) => {
            state.isLoading = true;
        },
        checkAuthSuccessAction: (state: AuthStateType, { payload }: PayloadAction<CheckAuthType>) => {
            const { isAuthorized } = payload;
            state.isAuthorized = isAuthorized;
            state.isLoading = false;
        },
        setNotAuthAction: (state: AuthStateType) => {
            state.isAuthorized = false;
        },
        registerUserAction: (state: AuthStateType, {}: PayloadAction<AuthFormType>) => {
            state.isLoading = true;
        },
        loginUserAction: (state: AuthStateType, {}: PayloadAction<AuthFormType>) => {
            state.isLoading = true;
        },
        authUserSuccessAction: (state: AuthStateType, { payload }: PayloadAction<AuthAccessTokenType>) => {
            const { accessToken } = payload;
            state.isAuthorized = true;
            setLocalStorage("accessToken", accessToken);
            state.isLoading = false;
        },
        authErrorAction: (state: AuthStateType) => {
            state.isLoading = false;
        },
    },
});

export const {
    checkAuthAction,
    checkAuthSuccessAction,
    setNotAuthAction,
    registerUserAction,
    loginUserAction,
    authUserSuccessAction,
    authErrorAction,
} = authSlice.actions;

export default authSlice.reducer;
