import { createSlice } from "@reduxjs/toolkit";


interface ThemeState {
    themeMode: 'light' | 'dark';
}

const initialState: ThemeState = {
    themeMode: 'dark'
}

const ThemeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    }
  }
});

export const { reducer: themeReducers, actions: toggleTheme } = ThemeSlice;