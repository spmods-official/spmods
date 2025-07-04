import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "@/slices/settings";
import modulesReducer from "@/slices/modules";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    modules: modulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
