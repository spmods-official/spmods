import { selectColorScheme } from "@/slices/settings";
import { DARK_COLOR_SCHEME, type ColorScheme } from "@/types/settings";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useThemeEffect() {
  const colorScheme: ColorScheme = useSelector(selectColorScheme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      colorScheme === DARK_COLOR_SCHEME,
    );
  }, [colorScheme]);
}
