"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/config/firebaseConfig";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

const UnProtectedRouteProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const InitiateAuthStateChange = () => {
        setIsLoading(true);

        auth.onAuthStateChanged((user) => {
            if (user) {
                router.push("/");
            }

            setIsLoading(false);
        });
    };

    useEffect(() => {
        InitiateAuthStateChange();
        //eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <CircularProgress />;
    }

    return children;
};

export default UnProtectedRouteProvider;
