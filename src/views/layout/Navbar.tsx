import useColorScheme from "@/views/hooks/useColorScheme";
import { DARK_COLOR_SCHEME } from "@/types/settings";
import { Link } from "react-router";

export default function Navbar() {
  const logoSrc =
    useColorScheme() !== DARK_COLOR_SCHEME ? "light_logo.png" : "dark_logo.png";
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
