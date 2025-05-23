import { useEffect } from "react";

export default function useHtmlDarkClass(isDark: boolean) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);
}
