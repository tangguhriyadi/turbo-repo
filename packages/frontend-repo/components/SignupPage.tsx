"use client";

import React from "react";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, signupSchema } from "@/schema/signupSchema";
import useSignup from "@/hooks/useRegister";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";

const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema),
        mode: "onChange",
    });

    const { signup, isError, isLoading } = useSignup();

    const onSubmit = (data: SignupSchema) => {
        signup(data);
    };

    return (
        <Container
            maxWidth="xs"
            sx={{
                padding: "20px",
                mt: "20px",
            }}
        >
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
                    Sign Up
                </Typography>
                {isError && (
                    <Typography color="error" variant="body2" gutterBottom>
                        User has already exist
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
                        label="Full Name"
                        type="text"
                        fullWidth
                        margin="normal"
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message}
                        required
                        {...register("fullName")}
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                        required
                        {...register("confirmPassword")}
                    />
                    <Stack width="100%" spacing="4px" direction="row-reverse">
                        <Link href="/login">
                            <Typography color="primary">Login</Typography>
                        </Link>
                        <Typography>Already have an account ?</Typography>
                    </Stack>
                    <LoadingButton
                        loading={isLoading}
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        color="primary"
                    >
                        Sign Up
                    </LoadingButton>
                </Stack>
            </Box>
        </Container>
    );
};

export default SignupPage;
