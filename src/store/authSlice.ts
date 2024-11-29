import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface AuthState {
    user:  null;
    token: string | null;
    email: string;
    user_role: string;
    otp: string;
}

const initialState: AuthState = {
    user: null,
    token: null,
    user_role: "user",
    email: '',
    otp: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            sessionStorage.setItem('token', action.payload);
            state.token = action.payload;
        },
        setEmailStore(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setOtpStore(state, action: PayloadAction<string>) {
            state.otp = action.payload;
        },
        setUser(state, action: PayloadAction<User>) {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
        },
        clearUserAndToken(state) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            state.user = null;
            state.token = null;
        },
    },
});

export const { setToken, clearUserAndToken, setEmailStore, setOtpStore, setUser } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;
export const selectEmail = (state: { auth: AuthState }) => state.auth.email;
export const selectOtp = (state: { auth: AuthState }) => state.auth.otp;
