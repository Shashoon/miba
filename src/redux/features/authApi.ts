import { Auth } from "aws-amplify";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
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
    currentAuthenticatedUser: builder.query<any, void>({
      queryFn: async () => {
        console.log("ww123");
        try {
          const user = await Auth.currentAuthenticatedUser();
          console.log("ww", user);
          const userData = {
            username: user.username,
            attributes: user.attributes, // Include attributes like email, sub, etc.
          };
          return { data: userData };
        } catch (error) {
          console.log("errr", error);
          const errorMessage =
            error instanceof Error
              ? error.message
              : "No authenticated user found";
          return { error: { status: 401, data: errorMessage } };
        }
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignOutMutation,
  useCurrentAuthenticatedUserQuery,
} = authApi;
