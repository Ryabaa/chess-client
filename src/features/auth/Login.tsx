import React, { useState } from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { loginUserAction } from "./slice";

import { Button, Container, Form, Input, Text, Title } from "./styles";

import { Loader } from "../loader/Loader";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state: RootState) => state.auth);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUserAction({ username, password }));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Title>Welcome back!</Title>
            <Text>Sign in to continue</Text>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Container>
                <Button type="submit">Login</Button>
                {isLoading && <Loader size={60} />}
            </Container>
        </Form>
    );
};

export default Login;
