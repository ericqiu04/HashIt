import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    // @ericqiu04 Define user structure
}

interface AuthState {
    // @ericqiu04 Define authentication state structure
    user: User | null
    isLoggedIn: boolean;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login: (state, action: PayloadAction<{ user: User; isLoggedIn: boolean; token: string }>) => {
            const { user, isLoggedIn, token } = action.payload;
            state.user = user;
            state.isLoggedIn = isLoggedIn;
            state.token = token;
        },

        logout: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
