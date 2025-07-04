import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { fetchModules } from "@/apis/modules";

import type { ModulesState } from "@/types/state";

import type { Module } from "@/types/module";

import { slugify } from "@/utils/slugify";

export const fetchAllModules = createAsyncThunk<
  Module[],
  void,
  { rejectValue: string }
>("modules/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const modules = await fetchModules();
    return modules;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const defaultModulesState: ModulesState = {
  modules: [],
  status: "idle",
  error: null,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState: defaultModulesState,
  reducers: {
    clearError: (state: ModulesState) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllModules.pending, (state: ModulesState) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchAllModules.fulfilled,
        (state: ModulesState, action: PayloadAction<Module[]>) => {
          state.status = "succeeded";
          state.modules = action.payload;
        },
      )
      .addCase(
        fetchAllModules.rejected,
        (state: ModulesState, action: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.error = action.payload || "Failed to fetch modules";
        },
      );
  },
  selectors: {
    selectModules: (state: ModulesState) => {
      return state.modules;
    },
    selectModulesStatus: (state: ModulesState) => {
      return state.status;
    },
    selectModulesError: (state: ModulesState) => {
      return state.error;
    },
  },
});

export const { selectModules, selectModulesStatus, selectModulesError } =
  modulesSlice.selectors;
export const { clearError } = modulesSlice.actions;

export default modulesSlice.reducer;

export const selectModuleBySlug = createSelector(
  [selectModules, (_state, slugifiedModuleName) => slugifiedModuleName],
  (modules: Module[], slugifiedModuleName: string) => {
    return (
      modules.find((module) => slugify(module.name) === slugifiedModuleName) ||
      null
    );
  },
);
