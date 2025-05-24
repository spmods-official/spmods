import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "@/slices/settings";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
