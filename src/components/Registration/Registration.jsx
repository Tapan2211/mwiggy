import React, { useState } from "react";
import styles from './Registration.module.css';
import { Box, Button, Stack, TextField, CircularProgress } from "@mui/material";
import { authRegistration } from '../Api/Api';
import {Logo} from '../Logo/Logo';
import { Link,useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const register = async (formData) => {

        if (!validateInput(formData)) {
            return false;
        }
        setIsLoading(true);
        console.log("formData :-", formData)
        try {

            const response = await authRegistration(formData);
            console.log("response :-", response)

            if (response.status === 201) {
                setIsLoading(false);
                toast.success("Registration Successful");
                navigate('/login');
            }

        } catch (error) {
            if (error.response && error.response.status === 400) {
                setIsLoading(false);
                toast.success("Error :", error.response.status.message);
            } else {
                setIsLoading(false);
                toast.success("Error :", "Something went wrong. Check the backend is running and reachable.");
            }
        }
    };


    const validateInput = (data) => {

        if (data.username === "") {
            toast.warn("Username is a required field")
            return false;
        } else if (data.username.length < 3) {
            toast.warn("Username must be at least 3 characters")
            return false;
        } else if (data.password === "") {
            toast.warn("Password is a required field")
            return false;
        } else if (data.password.length < 6) {
            toast.warn("Password must be at least 6 characters")
            return false;
        } else if (data.confirmPassword === "") {
            toast.warn("Confirm Password is a required field")
            return false;
        } else if (data.password !== data.confirmPassword) {
            toast.warn("Passwords do not match")
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

                    <Logo/>
                    <h2>Registration</h2>

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
                    <TextField
                        id="confirmPassword"
                        variant="outlined"
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                            <Button variant="contained" style={{ backgroundColor: 'orange' }} onClick={() => register({
                                username: userName,
                                password: password,
                                confirmPassword: confirmPassword
                            })}>REGISTRATION</Button>
                        )
                    }

                    <p className="secondary-action">
                        Already have an account?{" "}
                        <Link to="/login">
                            <span style={{color:'orange'}}>Login here</span>
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

export default Registration;