import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateType, AUTH, AuthDataType, AuthFormType } from "./types";

const authInitialState: AuthStateType = {
    authData: {
        id: null,
        token: null,
    },
    error: null,
    isLoading: false,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: AUTH,
    initialState: authInitialState,
    reducers: {
        registerUserAction: (state: AuthStateType, {}: PayloadAction<AuthFormType>) => {
            state.isLoading = true;
            state.error = null;
        },
        loginUserAction: (state: AuthStateType, {}: PayloadAction<AuthFormType>) => {
            state.isLoading = true;
            state.error = null;
        },
        authUserSuccessAction: (state: AuthStateType, { payload: authData }: PayloadAction<AuthDataType>) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.authData = authData;
        },
        authUserErrorAction: (state: AuthStateType, { payload: error }: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = error;
        },
    },
});

export const { registerUserAction, loginUserAction, authUserSuccessAction, authUserErrorAction } =
    authSlice.actions;

export default authSlice.reducer;
