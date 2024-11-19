import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { User } from "shared/user";
import { userApiSlice } from "@/apis/userApi";

export interface UserState {
    status: "success" | "pending" | "rejected" | "idle";
    user?: User;
}

const userAdapter = createEntityAdapter<User>();

const initialState = userAdapter.getInitialState<UserState>({
    status: "idle",
    user: undefined,
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetUser: () => {
            return userAdapter.getInitialState<UserState>({
                status: "idle",
                user: undefined,
            });
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApiSlice.endpoints.user.matchFulfilled,
            (state, { payload }) => {
                userAdapter.addOne(state, payload.data);
                state.status = "success";
                state.user = payload.data;
            }
        );
        builder.addMatcher(
            userApiSlice.endpoints.user.matchPending,
            (state) => ({
                ...state,
                status: "pending",
            })
        );
        builder.addMatcher(
            userApiSlice.endpoints.user.matchRejected,
            (state) => ({
                ...state,
                status: "rejected",
            })
        );
    },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
