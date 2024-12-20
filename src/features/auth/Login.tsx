import { ChangeEvent, FC, FormEvent, useRef } from "react";

import { RootState } from "@app/store";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";

import { loginUserAction } from "./slice";

import { Button, Container, Form, Input, Text, Title } from "./styles";

import { Loader } from "@features/loader/Loader";

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state: RootState) => state.auth);
    const usernameRef = useRef<string>("");
    const passwordRef = useRef<string>("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(loginUserAction({ email: usernameRef.current, password: passwordRef.current }));
    };

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        usernameRef.current = event.target.value;
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        passwordRef.current = event.target.value;
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Title>Welcome back!</Title>
            <Text>Sign in to continue</Text>
            <Input type="email" placeholder="Email" onChange={handleUsernameChange} />
            <Input type="password" placeholder="Password" onChange={handlePasswordChange} />
            <Container>
                <Button type="submit">Login</Button>
                {isLoading && <Loader size={60} />}
            </Container>
        </Form>
    );
};

export default Login;
