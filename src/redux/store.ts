import { Hub } from "aws-amplify";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { authApi } from "./features/authApi";
import authSlice from "./features/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const listener = (data: any) => {
  console.log("cccccs", data);
};

Hub.listen("USER AUTH STATE", listener);
