import { NavLink } from "react-router-dom";
import { Home, Info, Settings, Users } from "react-feather";

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

export default function MobileSidebar() {
  return (
    <aside className="w-full bg-header py-3 text-content/70">
      <nav>
        <ul className="flex justify-center space-x-6">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `flex items-center p-2 transition-colors ${
                    isActive ? "text-primary" : "hover:text-content"
                  }`
                }
              >
                <route.icon size={24} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
