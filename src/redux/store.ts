import { TypedUseSelectorHook, useSelector } from "react-redux";

import authReducer from "./features/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
