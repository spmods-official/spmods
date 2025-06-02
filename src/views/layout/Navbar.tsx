import { useMemo, type FC } from "react";
import { DARK_COLOR_SCHEME } from "@/types/settings";
import { Link } from "react-router";
import useColorScheme from "@/views/hooks/useColorScheme";

const Navbar: FC = () => {
  const colorScheme = useColorScheme();
  const logoSrc = useMemo(
    () =>
      colorScheme === DARK_COLOR_SCHEME ? "dark_logo.png" : "light_logo.png",
    [colorScheme],
  );
  return (
    <nav className="p-4 bg-header">
      <Link to="/">
        <img
          src={logoSrc}
          alt="SPMods Logo"
          className="h-8 w-56"
          draggable="false"
        ></img>
      </Link>
    </nav>
  );
};

export default Navbar;
