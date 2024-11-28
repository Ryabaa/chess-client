export type AuthFormType = {
    email: string | null;
    password: string | null;
};

export type AuthAccessTokenType = {
    accessToken: string;
};

export type CheckAuthType = {
    isAuthorized: boolean;
};

export type AuthStateType = {
    isLoading: boolean;
    isAuthorized: boolean;
};

export const AUTH = "auth";
export type AUTH = typeof AUTH;
