import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { AuthFormType, AuthAccessTokenType, CheckAuthType } from "./types";
import {
    authErrorAction,
    authUserSuccessAction,
    checkAuthAction,
    checkAuthSuccessAction,
    loginUserAction,
    registerUserAction,
} from "./slice";
import { checkAuthApi, loginUserApi, registerUserApi } from "./api";

import getErrorMessage from "@utils/getErrorMessage";
import { notifyError } from "@utils/toastNotifications";

function* registerUserSaga({ payload: formData }: PayloadAction<AuthFormType>) {
    try {
        const res: AxiosResponse<AuthAccessTokenType> = yield call(registerUserApi, formData);
        yield put(authUserSuccessAction(res.data));
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(authErrorAction());
        notifyError(errorMessage);
    }
}

function* loginUserSaga({ payload: formData }: PayloadAction<AuthFormType>) {
    try {
        const res: AxiosResponse<AuthAccessTokenType> = yield call(loginUserApi, formData);
        yield put(authUserSuccessAction(res.data));
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(authErrorAction());
        notifyError(errorMessage);
    }
}

function* checkAuthSaga({ payload: accessToken }: PayloadAction<AuthAccessTokenType>) {
    try {
        const res: AxiosResponse<CheckAuthType> = yield call(checkAuthApi, accessToken);
        yield put(checkAuthSuccessAction(res.data));
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(authErrorAction());
        notifyError(errorMessage);
    }
}

export function* watchAuthUser() {
    yield takeEvery(loginUserAction.type, loginUserSaga);
    yield takeEvery(registerUserAction.type, registerUserSaga);
    yield takeEvery(checkAuthAction.type, checkAuthSaga);
}
