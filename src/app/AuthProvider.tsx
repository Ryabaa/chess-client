import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { checkAuthAction } from "@features/auth/slice";
import { getLocalStorage } from "@utils/localStorage";

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = getLocalStorage("accessToken");
        if (accessToken) {
            dispatch(checkAuthAction({ accessToken: accessToken }));
        }
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthProvider;
