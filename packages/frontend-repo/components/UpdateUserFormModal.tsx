"use client";

import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UpdateUserScehma, updateUserSchema } from "../schema/updateUserSchema";
import { useAppSelector } from "../store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useLazyUserQuery, useUpdateUserMutation } from "@/apis/userApi";

interface UpdateUserFormModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

const UpdateUserFormModal: React.FC<UpdateUserFormModalProps> = (props) => {
    const { isOpen, handleClose } = props;
    const userState = useAppSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<UpdateUserScehma>({
        resolver: zodResolver(updateUserSchema),
        mode: "onChange",
    });

    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const [trigger] = useLazyUserQuery(); // Add this

    const onSubmit = useCallback(
        (data: UpdateUserScehma) => {
            updateUser(data).then(async () => {
                handleClose();
                reset();
                await trigger({});
            });
        },
        [updateUser, handleClose, reset, trigger]
    );

    useEffect(() => {
        if (userState.user) {
            setValue("email", userState.user.email);
            setValue("fullName", userState.user.fullName ?? "");
        }
    }, [userState.user, setValue]);

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Update User</DialogTitle>
            <DialogContent>
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
                        disabled
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

                    <LoadingButton
                        loading={isLoading}
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        color="primary"
                    >
                        Submit
                    </LoadingButton>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateUserFormModal;
