import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { AuthDataType, AuthFormType } from "./types";
import { authUserErrorAction, authUserSuccessAction, loginUserAction, registerUserAction } from "./slice";
import { loginUserApi, registerUserApi } from "./api";

import getErrorMessage from "../../utils/getErrorMessage";
import { notifyError } from "../../utils/toastNotifications";

function* registerUserSaga({ payload: formData }: PayloadAction<AuthFormType>) {
    try {
        const res: AxiosResponse<AuthDataType> = yield call(registerUserApi, formData);
        yield put(authUserSuccessAction(res.data));
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(authUserErrorAction(errorMessage));
        notifyError(errorMessage);
    }
}

function* loginUserSaga({ payload: formData }: PayloadAction<AuthFormType>) {
    try {
        const res: AxiosResponse<AuthDataType> = yield call(loginUserApi, formData);
        yield put(authUserSuccessAction(res.data));
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(authUserErrorAction(errorMessage));
        notifyError(errorMessage);
    }
}

export function* watchAuthUser() {
    yield takeLatest(loginUserAction.type, registerUserSaga);
    yield takeLatest(registerUserAction.type, loginUserSaga);
}
