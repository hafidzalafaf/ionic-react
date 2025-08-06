import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks";

interface SignInState {
  user: any; // Replace 'any' with a more specific type if available
  loading: boolean;
  error: Error | null | string;
}

const initialState:SignInState = {
  user: null,
  loading: false,
  error: null, // Initialize error as null, but cast to Error type for consistency
};

const SignInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {reducer : signInReducers} = SignInSlice;