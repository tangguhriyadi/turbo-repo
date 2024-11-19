import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { auth } from "../config/firebaseConfig";

export const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: async (headers) => {
        // Wait for Firebase to load the current user
        const token = await new Promise<string | null>((resolve) => {
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const token = await user.getIdToken();
                    resolve(token);
                } else {
                    resolve(null);
                }
                unsubscribe(); // Prevent memory leaks
            });
        });

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        headers.set("Content-Type", "application/json");

        return headers;
    },
});
