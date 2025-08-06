import { RootState } from "../../..";

export const selectSignInState = (state: RootState) => state.auth.signIn;