import { NavLink } from "react-router-dom";
import { Home, Info, Settings, Users } from "react-feather";

// Modify this to add more routes
const routes = [
  {
    path: "/",
    name: "Home",
    icon: Home,
  },
  {
    path: "/about",
    name: "About",
    icon: Info,
  },

  {
    path: "/settings",
    name: "Settings",
    icon: Settings,
  },
  {
    path: "/contributors",
    name: "Contributors",
    icon: Users,
  },
];

export default function Sidebar() {
  return (
    <aside
      className={`w-sidebar bg-background h-full py-6 text-content/70 text-lg`}
    >
      <nav>
        <ul className="flex flex-col space-y-2 pl-4">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors ${
                    isActive ? "text-primary" : "hover:text-content"
                  }`
                }
              >
                <route.icon size={20} className="mr-3" />
                <span>{route.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
