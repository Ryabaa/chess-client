import { Outlet, Navigate } from "react-router-dom";

import { useAppSelector } from "@hooks/reduxHooks";
import { RootState } from "./store";

const PrivateRoutes = () => {
    const { isAuthorized } = useAppSelector((state: RootState) => state.auth);

    return isAuthorized ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
