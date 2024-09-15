import { Hub } from "aws-amplify";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { authApi } from "./features/authApi";
import userSlice from "./features/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const listener = (data: any) => {
  console.log("1-1-1-1-1-User Auth State Changed:", data);
};

// Subscribe to the correct Hub topic
Hub.listen("auth", listener);
