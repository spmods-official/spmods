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

        <div className="flex flex-col w-2/3 space-y-4 mt-6 gap-4 overflow-y-auto max-h-[70vh] scrollbar-hide">
          {filteredModules.map((module) => (
            <div className="flex flex-row p-4 rounded-lg border dark:border-gray-700 cursor-pointer
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div
                key={module.code}
                onClick={() => navigate(`/module/${module.code}`)}
                className="flex flex-col gap-2 w-4/5"
              >
                <h3 className="font-bold text-lg">{module.code} {module.name}</h3>
                <h4 className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                {module.school} • {module.creditUnit} Credits
                </h4>
                <p className="text-gray-200 dark:text-gray-300">
                  {module.description}
                </p>
              </div>

              <div className="flex flex-col w-1/5 pl-4 items-start justify-between text-sm">
                {/* Semester */}
                <div className="">Semester {module.semester} • {module.elective ? "Elective" : "Core"}</div>

                {/* Courses Offered */}
                <div className="flex flex-col items-start">
                  <span className="mb-2 text-gray-400">Offered By:</span>
                  <div className="flex flex-row gap-1">
                    {module.course.map((course) => (
                      <span
                        key={course}
                        className={`px-2 py-1 rounded font-semibold text-xs text-white`}
                        style={{
                          backgroundColor:
                            course === "DAAA"
                              ? "#2563eb"
                              : course === "DIT"
                              ? "#059669"
                              : "#b91c1c",
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Total Hours */}
                <div className="text-gray-400 mt-2">Workload:</div>
                <div className="flex flex-col gap-1">
                  {Array.from({ length: Math.ceil(Math.ceil(Number(module.totalHours) / 15) / 6) }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row gap-1">
                      {Array.from({ length: Math.min(6, Math.ceil(Number(module.totalHours) / 15) - rowIndex * 6) }).map((_, i) => (
                        <div
                          key={rowIndex * 6 + i}
                          className="w-4 h-4 bg-amber-800 rounded-sm"
                          title={`${15 * (rowIndex * 6 + i + 1)} hours`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
}
