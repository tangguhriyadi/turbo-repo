"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { logout } from "../lib/auth";
import { useAppDispatch } from "../store/hooks";
import { resetUser } from "../store/slices/userSlice";

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
            await logout();
            dispatch(resetUser());
            console.log("User successfully logged out");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Application
                </Typography>

                <Box>
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        sx={{ textTransform: "none" }}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
