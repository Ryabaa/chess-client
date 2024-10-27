import { FC } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../styles/globalStyles";
import { darkTheme } from "../styles/themes";

import Auth from "../features/auth/Auth";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

const App: FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                />
                <BrowserRouter>
                    <Routes>
                        <Route path="/auth/*" element={<Auth />}>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
