import type { Module } from "@/types/module";

export async function fetchModules(): Promise<Module[]> {
  try {
    const response = await fetch("/modules.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch modules: ${error.message}`);
    }
    return [];
  }
}
