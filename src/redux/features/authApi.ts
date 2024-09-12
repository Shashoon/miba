import { Auth } from "aws-amplify";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      async queryFn({ username, password }) {
        try {
          console.log("ccc");
          const user = await Auth.signIn(username, password);
          console.log("useruser", user);
          const userData = {
            username: user.username,
            userDataKey: user.userDataKey,
          };
          console.log("kjkj", userData);
          return { data: userData };
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error occurred";
          return { error: { status: 500, data: errorMessage } };
        }
      },
    }),
    signOut: builder.mutation({
      async queryFn() {
        try {
          await Auth.signOut();
          return { data: "Signed out" };
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error occurred";
          return { error: { status: 500, data: errorMessage } };
        }
      },
    }),
  }),
});

export const { useSignInMutation, useSignOutMutation } = authApi;
