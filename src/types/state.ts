import type { Module } from "@/types/module";
import type { ColorSchemePreference } from "./settings";

export type SettingsState = {
  colorSchemePreference: ColorSchemePreference;
};

export type ModulesState = {
  modules: Module[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};
