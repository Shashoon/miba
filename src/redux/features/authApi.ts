import { Auth } from "aws-amplify";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["User"], // Define a tag for the user
  endpoints: (builder) => ({
    signIn: builder.mutation({
      async queryFn({ username, password }) {
        try {
          const user = await Auth.signIn(username, password);
          const userData = {
            username: user.username,
            userDataKey: user.userDataKey,
          };
          console.log("sign in, ", user);
          return { data: userData };
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error occurred";
          return { error: { status: 500, data: errorMessage } };
        }
      },
      invalidatesTags: ["User"], // Invalidate user tag after sign in
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
      invalidatesTags: ["User"], // Invalidate user tag after sign out
    }),
    currentAuthenticatedUser: builder.query<any, void>({
      queryFn: async () => {
        console.log(" f f f ff f ");
        try {
          const user = await Auth.currentAuthenticatedUser();
          console.log("u s s s s er,", user);
          return { data: user };
        } catch (error) {
          console.log("errr mes s ss", error);
          const errorMessage =
            error instanceof Error
              ? error.message
              : "No authenticated user found";
          return { error: { status: 401, data: errorMessage } };
        }
      },
      providesTags: ["User"], // Provide user tag
    }),
  }),
});

export const {
  useSignInMutation,
  useSignOutMutation,
  useCurrentAuthenticatedUserQuery,
} = authApi;
