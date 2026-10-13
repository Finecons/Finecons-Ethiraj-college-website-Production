
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        role: null,
        token: sessionStorage.getItem("token") || null,
        permissions: {},
        isAuthenticated: !!sessionStorage.getItem("token"),
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.permissions = action.payload.permissions;
            state.isAuthenticated = true;
            console.log("Permissions:", state.permissions);

              // Store in localStorage
              sessionStorage.setItem("user", JSON.stringify(action.payload.user));
              sessionStorage.setItem("role", action.payload.role);
              sessionStorage.setItem("token", action.payload.token);
              sessionStorage.setItem("permissions", JSON.stringify(action.payload.permissions));
   
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
            state.token = null;
            state.permissions = {};
            state.isAuthenticated = false;
            // localStorage.removeItem("token");

            // Clear localStorage
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("permissions");
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;