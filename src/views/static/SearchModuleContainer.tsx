import { Search } from "react-feather";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeholderModules } from "@/mocks/modules";
import useMediaQuery from "../hooks/useMediaQuery";

export default function SearchModuleContainer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    courses: [] as string[],
    schools: [] as string[],
    creditRange: { min: 1, max: 50 },
    elective: "all" as "all" | "core" | "elective"
  });
  const navigate = useNavigate();

  // Get unique courses from data
  const availableCourses = [...new Set(
    placeholderModules.flatMap(module => module.course)
  )].sort();

  // Get unique schools from data
  const availableSchools = [...new Set(
    placeholderModules.map(module => module.school)
  )].sort();

  const filteredModules = placeholderModules.filter((mod) => {
    const matchesSearch = mod.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mod.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCourse = filters.courses.length === 0 || 
                         filters.courses.some(course => mod.course.includes(course));
    
    const matchesSchool = filters.schools.length === 0 || 
                         filters.schools.includes(mod.school);
    
    const matchesCredits = mod.creditUnit >= filters.creditRange.min && 
                          mod.creditUnit <= filters.creditRange.max;
    
    const matchesElective = filters.elective === "all" || 
                           (filters.elective === "elective" && mod.elective) ||
                           (filters.elective === "core" && !mod.elective);

    return matchesSearch && matchesCourse && matchesSchool && matchesCredits && matchesElective;
  });

  const toggleFilter = (type: keyof typeof filters, value: any) => {
    setFilters(prev => {
      if (type === "elective") {
        return { ...prev, [type]: value };
      }
      if (type === "creditRange") {
        return { ...prev, [type]: value };
      }
      const currentArray = prev[type] as any[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [type]: newArray };
    });
  };

  const updateCreditRange = (field: 'min' | 'max', value: number) => {
    setFilters(prev => ({
      ...prev,
      creditRange: {
        ...prev.creditRange,
        [field]: value
      }
    }));
  };

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

        <div className="flex gap-6">
          {/* Module List */}
          <div className={`flex flex-col ${isMobile ? 'w-full' : 'w-3/4'} space-y-4 overflow-y-auto max-h-[70vh] scrollbar-hide`}>
            {filteredModules.map((module) => (
              <div key={module.code} className="flex flex-row p-4 rounded-lg border dark:border-gray-700 cursor-pointer
                    hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div
                  onClick={() => navigate(`/module/${module.code}`)}
                  className={`flex flex-col gap-2 ${isMobile ? 'w-full' : 'w-4/5'}`}
                >
                  <h3 className="font-bold text-lg">{module.code} {module.name}</h3>
                  <h4 className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  {module.school} • {module.creditUnit} Credits
                  </h4>
                  <p className="text-gray-200 dark:text-gray-300">
                    {module.description}
                  </p>
                </div>

                <div className={`flex flex-col w-1/5 min-w-[20vw] pl-4 items-start justify-between text-sm ${isMobile ? 'hidden' : ''}`}>
                  <div className="">Semester {module.semester} • {module.elective ? "Elective" : "Core"}</div>

                  <div className="flex flex-col items-start">
                    <span className="mb-2 text-gray-400">Offered By:</span>
                    <div className="flex flex-row gap-1">
                      {module.course.map((course) => (
                        <span
                          key={course}
                          className={`px-2 py-1 rounded font-semibold text-xs text-white`}
                          style={{
                            backgroundColor:
                              course === "DAAA" ? "#2563eb" : course === "DIT" ? "#059669" : "#b91c1c",
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

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

          {/* Filters */}
          <div className={`w-1/4 p-4 border rounded-lg dark:border-gray-700 h-fit ${isMobile ? 'hidden' : ''}`}>
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            
            {/* Course Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-lg">Course</h4>
              <div className="pl-4">
                {availableCourses.map(course => (
                  <label key={course} className="flex items-center mb-1 text-gray-400">
                    <input
                      type="checkbox"
                      checked={filters.courses.includes(course)}
                      onChange={() => toggleFilter("courses", course)}
                      className="mr-2"
                    />
                    {course}
                  </label>
                ))}
              </div>
            </div>

            {/* School Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-lg">School</h4>
              <div className="pl-4">
                {availableSchools.map(school => (
                  <label key={school} className="flex items-center mb-1 text-gray-400">
                    <input
                      type="checkbox"
                      checked={filters.schools.includes(school)}
                      onChange={() => toggleFilter("schools", school)}
                      className="mr-2"
                    />
                    {school}
                  </label>
                ))}
              </div>
            </div>

            {/* Credit Units Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-lg">Credit Units</h4>
              <div className="flex gap-2 items-center pl-4 pt-1">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={filters.creditRange.min}
                  onChange={(e) => updateCreditRange('min', parseInt(e.target.value) || 1)}
                  className="w-16 p-1 rounded border dark:bg-gray-800 dark:border-gray-700 text-sm"
                />
                <span className="">to</span>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={filters.creditRange.max}
                  onChange={(e) => updateCreditRange('max', parseInt(e.target.value) || 50)}
                  className="w-16 p-1 rounded border dark:bg-gray-800 dark:border-gray-700 text-sm"
                />
              </div>
            </div>

            {/* Elective Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2 text-lg">Type</h4>
              <div className="pl-4">
                {[
                  { value: "all", label: "All" },
                  { value: "core", label: "Core" },
                  { value: "elective", label: "Elective" }
                ].map(option => (
                  <label key={option.value} className="flex items-center mb-1 text-gray-400">
                    <input
                      type="radio"
                      name="elective"
                      checked={filters.elective === option.value}
                      onChange={() => toggleFilter("elective", option.value)}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
