import { NavLink } from "react-router-dom";
import { Home, Info } from "react-feather";


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
];

export default function SideBar() {

  return (
    <aside className={`min-w-[10vw] bg-background h-full py-6 text-gray-400 text-lg`}>
      <nav>
        <ul className="flex flex-col space-y-2 pl-4">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={`flex items-center px-4 py-2`}
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