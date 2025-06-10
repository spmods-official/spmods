import { useMemo, type FC } from "react";
import { DARK_COLOR_SCHEME } from "@/types/settings";
import { Link } from "react-router";
import useColorScheme from "@/views/hooks/useColorScheme";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar: FC = () => {
  const colorScheme = useColorScheme();
  const logoSrc = useMemo(
    () =>
      colorScheme === DARK_COLOR_SCHEME ? "/dark_logo.png" : "/light_logo.png",
    [colorScheme],
  );
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <nav className={`p-4 bg-header ${isMobile ? "flex justify-center" : ""}`}>
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
