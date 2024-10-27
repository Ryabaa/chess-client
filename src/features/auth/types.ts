export type AuthFormType = {
    username: string | null;
    password: string | null;
};

export type AuthDataType = {
    id: string | null;
    token: string | null;
};

export type AuthStateType = {
    authData: AuthDataType;
    error: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
};

export const AUTH = "auth";
export type AUTH = typeof AUTH;
