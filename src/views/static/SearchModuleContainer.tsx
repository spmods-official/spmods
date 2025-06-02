import { Search } from "react-feather";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeholderModules } from "@/mocks/modules";

export default function SearchModuleContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const moduleCode = searchQuery.trim().toUpperCase()
    const moduleExists = placeholderModules.some(mod => mod.code === moduleCode);

    if (moduleExists) {
      navigate(`/module/${moduleCode}`);
    } else {
      alert("Module not found");
    }
  }

  return <div>
    <div className="container mx-auto text-gray-900 dark:text-white">
      <header className="text-4xl font-bold my-4 flex items-center">
        <Search size={40} className="mr-4" />
        <span>Module Finder</span>
      </header>

      {/* for future update, can consider using the Searchkit package to do searching*/}
      <form onSubmit={handleSearch} method="post" className="my-4">
        <div className="flex gap-4">
          <input 
            type="text" 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search module code (e.g. ST0502)"
            className="flex-1 p-4 rounded-lg border dark:bg-gray-800 
                dark:border-gray-700"
          />
          <button type="submit" 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                hover:bg-blue-600 transition-colors">
            Search
          </button>
        </div>
      </form>
    </div>
  </div>;
}
