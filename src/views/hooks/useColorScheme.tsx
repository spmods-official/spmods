import {
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
  SYSTEM_COLOR_SCHEME_PREFERENCE,
  DARK_COLOR_SCHEME_PREFERENCE,
  LIGHT_COLOR_SCHEME_PREFERENCE,
} from "@/types/settings";
import type { ColorScheme } from "@/types/settings";
import useHtmlDarkClass from "./useHtmlDarkClass";

export default function useColorScheme(): ColorScheme {
  const resolvedColorScheme = (() => {
    return DARK_COLOR_SCHEME;
  })();

  useHtmlDarkClass(resolvedColorScheme === DARK_COLOR_SCHEME);

  return resolvedColorScheme;
}
