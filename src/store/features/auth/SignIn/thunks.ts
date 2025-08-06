import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseApiUrl } from "../../../../api";

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await baseApiUrl.post('/login', credentials);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);