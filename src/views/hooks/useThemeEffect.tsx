import { selectColorScheme } from "@/slices/settings";
import { type RootState } from "@/app/configureStore";
import { DARK_COLOR_SCHEME, type ColorScheme } from "@/types/settings";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useThemeEffect() {
    const colorScheme: ColorScheme = useSelector<RootState, ColorScheme>(selectColorScheme);

    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            colorScheme === DARK_COLOR_SCHEME,
        );
    }, [colorScheme]);
}
