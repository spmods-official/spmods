import { selectColorScheme } from "@/slices/settings";
import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME, type ColorScheme } from "@/types/settings";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useMediaQuery from "@/views/hooks/useMediaQuery";

export default function useThemeEffect() {
  const userPreferredScheme: ColorScheme | null = useSelector(selectColorScheme);

  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const actualScheme =
    userPreferredScheme === DARK_COLOR_SCHEME
      ? DARK_COLOR_SCHEME
      : userPreferredScheme === LIGHT_COLOR_SCHEME
      ? LIGHT_COLOR_SCHEME
      :
      systemPrefersDark
      ? DARK_COLOR_SCHEME
      : LIGHT_COLOR_SCHEME;

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      actualScheme === DARK_COLOR_SCHEME
    );
  }, [actualScheme]);
}
