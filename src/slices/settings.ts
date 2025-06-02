import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { SettingsState } from "@/types/state";

import {
    SYSTEM_COLOR_SCHEME_PREFERENCE,
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
    },
});

export const { selectColorSchemePreference } =
    settingsSlice.selectors;

export const { changeColorSchemePreference } = settingsSlice.actions;

export default settingsSlice.reducer;
