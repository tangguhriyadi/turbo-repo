"use client";

import React, { useCallback, useState } from "react";
import {
    Button,
    CircularProgress,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import FetchDataButton from "./FetchDataButton";
import { useAppSelector } from "../store/hooks";
import UpdateUserFormModal from "./UpdateUserFormModal";

const HomePage = () => {
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
    const userState = useAppSelector((state) => state.user);

    const handleCloseModal = useCallback(() => {
        setIsOpenUpdateModal(false);
    }, []);
    const handleOpenModal = useCallback(() => {
        setIsOpenUpdateModal(true);
    }, []);
    return (
        <Container sx={{ width: "100%", height: "100vh", py: "20px" }}>
            <Stack width="100%" alignItems="center" spacing="12px">
                {userState.status !== "success" && <FetchDataButton />}
                {userState.status === "success" && (
                    <>
                        <Typography variant="h2">User Data</Typography>
                        <Typography variant="body1">
                            Email: <strong>{userState.user?.email}</strong>
                        </Typography>
                        <Typography variant="body1">
                            Full Name:{" "}
                            <strong>
                                {userState.user?.fullName &&
                                userState.user?.fullName.length > 0
                                    ? userState.user?.fullName
                                    : "-"}
                            </strong>
                        </Typography>
                        <Button variant="contained" onClick={handleOpenModal}>
                            Update
                        </Button>
                    </>
                )}
                {userState.status === "rejected" && (
                    <Typography color="error">
                        Something went wrong, please try again !
                    </Typography>
                )}
                {userState.status === "pending" && <CircularProgress />}
            </Stack>
            <UpdateUserFormModal
                isOpen={isOpenUpdateModal}
                handleClose={handleCloseModal}
            />
        </Container>
    );
};

export default HomePage;
