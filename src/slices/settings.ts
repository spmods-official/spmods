import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { SettingsState } from "@/types/state";

import {
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
  SYSTEM_COLOR_SCHEME_PREFERENCE,
  DARK_COLOR_SCHEME_PREFERENCE,
  LIGHT_COLOR_SCHEME_PREFERENCE,
} from "@/types/settings";
import type { ColorSchemePreference } from "@/types/settings";

const defaultSettingsState: SettingsState = {
  colorSchemePreference: SYSTEM_COLOR_SCHEME_PREFERENCE,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: defaultSettingsState,
  reducers: {
    changeColorSchemePreference(
      state: SettingsState,
      action: PayloadAction<ColorSchemePreference>,
    ) {
      return {
        ...state,
        colorSchemePreference: action.payload,
      };
    },
  },
  selectors: {
    selectColorSchemePreference: (state: SettingsState) =>
      state.colorSchemePreference,
    selectColorScheme: createSelector(
      (state: SettingsState) => state.colorSchemePreference,
      (colorSchemePreference) => {
        // Set to true for now (use media query to check later on)
        const systemPrefersDarkColorScheme = true;

        switch (colorSchemePreference) {
          case SYSTEM_COLOR_SCHEME_PREFERENCE:
            return systemPrefersDarkColorScheme
              ? DARK_COLOR_SCHEME
              : LIGHT_COLOR_SCHEME;
          case LIGHT_COLOR_SCHEME_PREFERENCE:
            return LIGHT_COLOR_SCHEME;
          case DARK_COLOR_SCHEME_PREFERENCE:
          default:
            return DARK_COLOR_SCHEME;
        }
      },
    ),
  },
});

export const { selectColorSchemePreference, selectColorScheme } =
  settingsSlice.selectors;

export const { changeColorSchemePreference } = settingsSlice.actions;

export default settingsSlice.reducer;
