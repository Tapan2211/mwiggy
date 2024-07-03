import React, { useState } from "react";
import { Box, CircularProgress, Stack, TextField, Button } from "@mui/material";
import styles from './Login.module.css';
import { Logo } from "../Logo/Logo";
import { authLogin } from '../Api/Api';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AUTH_DATA, setToken, getToken } from '../Services/authService';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (formData) => {
        if (!validationInput(formData)) {
            return false;
        }
        setIsLoading(true);

        try {

            const response = await authLogin(formData);
            if (response.status === 201) {
                setIsLoading(false);
                const authData = {
                    token: response.data.token,
                    username: response.data.username,
                    balance: response.data.balance,
                }
                // setToken(JSON.stringify(authData));
                localStorage.setItem(AUTH_DATA, JSON.stringify(authData));
                toast.success("LoggedIn Successful");
                navigate('/');
            }

        } catch (error) {
            if (error.response && error.response.status === 400) {
                setIsLoading(false);
                toast.error(error)
            } else {
                setIsLoading(false);
                toast.error("Something went wrong. Check the backend is running and reachable.")
            }
        }

        // navigate('/');
    }


    const validationInput = (data) => {
        if (data.username === "") {
            toast.warn("Username is a required field");
            return false;
        } else if (data.username.length < 3) {
            toast.warn("Username must be at least 3 characters");
            return false;
        } else if (data.password === "") {
            toast.warn("Password is a required field")
            return false;
        } else if (data.password.length < 6) {
            toast.warn("Password must be at least 6 characters")
            return false;
        } else {
            return true;
        }
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            minHeight="100vh">

            <Box className={styles.content}>
                <Stack spacing={2} className={styles.form}>

                    <Logo />
                    <h2>Login</h2>

                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        title="Username"
                        name="username"
                        placeholder="Enter Username"
                        fullWidth
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        id="password"
                        variant="outlined"
                        label="Password"
                        name="password"
                        type="password"
                        helperText="Password must be atleast 6 characters length"
                        fullWidth
                        placeholder="Enter a password with minimum 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {
                        isLoading ? (
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="100%"
                            >
                                <CircularProgress size={20} style={{ color: "orange" }} />
                            </Box>
                        ) : (
                            <Button variant="contained" style={{ backgroundColor: 'orange' }} onClick={() => login({
                                username: userName,
                                password: password
                            })}>Login</Button>

                        )

                    }

                    <p className="secondary-action">
                        Already have an account?{" "}
                        <Link to="/register">
                            <span style={{ color: 'orange', cursor: 'pointer' }}> Registration here</span>
                        </Link>
                    </p>

                </Stack>
            </Box>
            <ToastContainer position='bottom-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light' />
        </Box>
    )
}

export default Login;
