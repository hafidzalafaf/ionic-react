import { combineReducers } from "@reduxjs/toolkit";
import { signInReducers, themeReducers } from "./features";

export const authReducers = combineReducers({
    signIn : signInReducers,
})

export const appReducers = combineReducers({
    theme: themeReducers,
});

export const rootReducers = combineReducers({
  auth : authReducers,
  app : appReducers,
});