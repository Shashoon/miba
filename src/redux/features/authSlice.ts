import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  username: string;
  userDataKey: string;
};

const initialState: AuthState = {
  isAuth: false,
  username: "",
  userDataKey: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Correct reducer to handle sign-in
    signIn: (
      state,
      action: PayloadAction<{ username: string; userDataKey: string }>
    ) => {
      state.isAuth = true;
      state.username = action.payload.username;
      state.userDataKey = action.payload.userDataKey;
    },

    // Reducer to handle sign-out
    signOut: () => {
      return initialState;
    },
  },
});

// Export actions
export const { signIn, signOut } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
