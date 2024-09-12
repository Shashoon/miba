import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  user: any | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.isAuth = true;
      state.user = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.isAuth = false;
      state.user = null;
      state.error = action.payload;
    },
    clearUser(state) {
      state.isAuth = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { setUser, setError, clearUser } = authSlice.actions;
export default authSlice.reducer;
