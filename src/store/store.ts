import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducers";

export const store = configureStore({
  reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
      serializableCheck: false,
        immutableCheck: false,
    }).concat([]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
