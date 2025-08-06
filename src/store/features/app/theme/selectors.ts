import { RootState } from "../../../store";

export const selectThemeMode = (state: RootState) => state.app.theme.themeMode;