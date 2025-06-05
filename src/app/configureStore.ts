import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "@/slices/settings";
import commentReducer from "@/slices/comments";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
