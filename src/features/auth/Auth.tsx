import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { AuthWrapper, Tab, Tabs } from "./styles";

const Auth: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isCurrentTabLogin: boolean = location.pathname.includes("login") ? true : false;

    const handleNavigateLogin = () => {
        navigate("/auth/login");
    };

    const handleNavigateRegister = () => {
        navigate("/auth/register");
    };

    useEffect(() => {
        if (location.pathname === "/auth") {
            navigate("/auth/login");
        }
    }, [location, navigate]);

    return (
        <AuthWrapper>
            <Tabs>
                <Tab $isActive={isCurrentTabLogin} onClick={handleNavigateLogin}>
                    Login
                </Tab>
                <Tab $isActive={!isCurrentTabLogin} onClick={handleNavigateRegister}>
                    Register
                </Tab>
            </Tabs>
            <Outlet />
        </AuthWrapper>
    );
};

export default Auth;
