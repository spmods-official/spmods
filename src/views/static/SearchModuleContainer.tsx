import { Search } from "react-feather";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeholderModules } from "@/mocks/modules";

export default function SearchModuleContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredModules = placeholderModules.filter((mod) =>
    mod.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="container mx-auto text-gray-900 dark:text-white">
        <header className="text-4xl font-bold my-4 flex items-center">
          <Search size={40} className="mr-4" />
          <span>Module Finder</span>
        </header>

        <div className="my-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search module code or name"
              className="flex-1 p-4 rounded-lg border dark:bg-gray-800 
                dark:border-gray-700"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-6 gap-4">
          {filteredModules.map((module) => (
            <div
              key={module.code}
              onClick={() => navigate(`/module/${module.code}`)}
              className="flex flex-col gap-2 p-4 rounded-lg border dark:border-gray-700 cursor-pointer
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="font-bold text-lg">{module.code} {module.name}</h3>
              <h4 className="text-gray-600 dark:text-gray-300 font-medium mb-2">
              {module.school} • {module.creditUnit} Credits
              </h4>
              <p className="text-gray-200 dark:text-gray-300">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
