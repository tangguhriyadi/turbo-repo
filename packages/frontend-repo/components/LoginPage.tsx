"use client";

import React from "react";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schema/loginSchema";
import useLogin from "@/hooks/useLogin";
import Link from "next/link";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const { login, isError, isLoading } = useLogin();

    const onSubmit = (data: LoginSchema) => {
        // Handle successful form submission
        login(data);
    };

    return (
        <Container maxWidth="xs" sx={{ padding: "20px", mt: "20px" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                {isError && (
                    <Typography color="error" variant="body2" gutterBottom>
                        Invalid Credential
                    </Typography>
                )}
                <Stack
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ width: "100%" }}
                >
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        required
                        {...register("email")}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        required
                        {...register("password")}
                    />
                    <Stack width="100%" spacing="4px" direction="row-reverse">
                        <Link href="/signup">
                            <Typography color="primary">Sign Up</Typography>
                        </Link>
                        <Typography>Don&apos;t have an account ?</Typography>
                    </Stack>
                    <LoadingButton
                        loading={isLoading}
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        color="primary"
                    >
                        Login
                    </LoadingButton>
                </Stack>
            </Box>
        </Container>
    );
};

export default LoginPage;
