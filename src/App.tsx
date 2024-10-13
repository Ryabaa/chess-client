import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./app/store";

const App: FC = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            {/*               <Route path="/" element={<Home />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path="*" element={<NotFound />} />  */}
                        </Routes>
                    </div>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    );
};

export default App;
