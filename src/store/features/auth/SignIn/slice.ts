import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const SignInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
});

export const {reducer : signInReducers} = SignInSlice;