import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/store/baseQuery";
import { User } from "shared/user";
import { BaseResponse } from "./response";
import { UpdateUserScehma } from "../schema/updateUserSchema";

export const userApiSlice = createApi({
    reducerPath: "userApi",
    baseQuery,
    tagTypes: ["User"],
    endpoints: (builder) => ({
        user: builder.query<BaseResponse<User>, unknown>({
            query: () => ({
                url: "/fetch-user-data",
                method: "GET",
            }),
            providesTags: [{ type: "User", id: "USER_DATA" }],
        }),
        updateUser: builder.mutation<BaseResponse<User>, UpdateUserScehma>({
            query: (body) => ({
                url: "/update-user-data",
                method: "PUT",
                body,
            }),
            invalidatesTags: [{ type: "User", id: "USER_DATA" }],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // Update the user slice directly after successful mutation
                    dispatch(
                        userApiSlice.util.updateQueryData(
                            "user",
                            undefined,
                            (draft) => {
                                draft.data = data.data;
                            }
                        )
                    );
                } catch {}
            },
        }),
    }),
});

export const { useUserQuery, useLazyUserQuery, useUpdateUserMutation } =
    userApiSlice;
