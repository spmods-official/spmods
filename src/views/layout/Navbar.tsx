import { useMemo } from "react";
import { useSelector } from "react-redux";
import { DARK_COLOR_SCHEME } from "@/types/settings";
import { Link } from "react-router";
import { selectColorScheme } from "@/slices/settings";

export default function Navbar() {
  const colorScheme = useSelector(selectColorScheme);
  const logoSrc = useMemo(
    () =>
      colorScheme === DARK_COLOR_SCHEME ? "dark_logo.png" : "light_logo.png",
    [colorScheme],
  );
  return (
    <nav className="py-[1rem] pl-[1rem] bg-header">
      <Link to="/">
        <img
          src={logoSrc}
          alt="SPMods Logo"
          className="h-[2rem] w-[14rem]"
          draggable="false"
        ></img>
      </Link>
    </nav>
  );
}
