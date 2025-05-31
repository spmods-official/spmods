import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/configureStore";
import type { ColorSchemePreference } from "@/types/settings";
import { LIGHT_COLOR_SCHEME_PREFERENCE, DARK_COLOR_SCHEME_PREFERENCE } from "@/types/settings";
import { selectColorSchemePreference, changeColorSchemePreference } from "@/slices/settings";

export default function SettingsContainer() {
  const dispatch = useDispatch();
  const currentColor = useSelector<RootState, ColorSchemePreference>(
    (state) => selectColorSchemePreference(state)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPref = e.target.value as ColorSchemePreference;
    dispatch(changeColorSchemePreference(newPref));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Toggle Light & Dark Mode</h2>
      <fieldset>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            name="color-scheme"
            value={LIGHT_COLOR_SCHEME_PREFERENCE}
            checked={currentColor === LIGHT_COLOR_SCHEME_PREFERENCE}
            onChange={handleChange}
            className="mr-2"
          />
          Light
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="color-scheme"
            value={DARK_COLOR_SCHEME_PREFERENCE}
            checked={currentColor === DARK_COLOR_SCHEME_PREFERENCE}
            onChange={handleChange}
            className="mr-2"
          />
          Dark
        </label>
      </fieldset>
    </div>
  );
}