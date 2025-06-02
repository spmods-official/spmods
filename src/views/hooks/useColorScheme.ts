import useMediaQuery from "./useMediaQuery";
import type { ColorScheme } from "@/types/settings";
import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectColorSchemePreference } from "@/slices/settings";
import { SYSTEM_COLOR_SCHEME_PREFERENCE, DARK_COLOR_SCHEME_PREFERENCE, LIGHT_COLOR_SCHEME_PREFERENCE, DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from "@/types/settings";

export default function useColorScheme(): ColorScheme {
    const colorSchemePreference = useSelector(selectColorSchemePreference);
    const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");

    const colorScheme = useMemo(() => {
        switch (colorSchemePreference) {
            case SYSTEM_COLOR_SCHEME_PREFERENCE:
                return systemPrefersDark ? DARK_COLOR_SCHEME : LIGHT_COLOR_SCHEME;
            case LIGHT_COLOR_SCHEME_PREFERENCE:
                return LIGHT_COLOR_SCHEME;
            case DARK_COLOR_SCHEME_PREFERENCE:
            default:
                return DARK_COLOR_SCHEME;
        }
    }, [colorSchemePreference, systemPrefersDark]);

    // Apply the theme to document
    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            colorScheme === DARK_COLOR_SCHEME
        );
    }, [colorScheme]);

    return colorScheme;
}
