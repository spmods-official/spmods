import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { slugify } from "@/utils/slugify";
import Badge from "../components/Badge";
import {
  selectModules,
  selectModulesError,
  selectModulesStatus,
  fetchAllModules,
} from "@/slices/modules";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/configureStore";

export default function SearchModuleContainer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    courses: [] as string[],
    schools: [] as string[],
    creditRange: { min: 1, max: 50 },
  });
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const modules = useSelector(selectModules);
  const status = useSelector(selectModulesStatus);
  const error = useSelector(selectModulesError);

  useEffect(() => {
    // Only dispatch if the status is 'idle' to prevent re-fetching on every render
    if (status === "idle") {
      dispatch(fetchAllModules());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading modules...</div>;
  }

  if (status === "failed") {
    return <div>Error loading modules: {error}</div>;
  }

  if (modules.length === 0 && status === "succeeded") {
    return <div>No modules found.</div>;
  }

  // Get unique courses from data
  const availableCourses = [
    ...new Set(
      modules.flatMap((module) =>
        module.courses.map((course) => course.course),
      ),
    ),
  ].sort();

  // Get unique schools from data
  const availableSchools = [
    ...new Set(modules.map((module) => module.moduleProvider)),
  ].sort();

  const filteredModules = modules.filter((mod) => {
    const matchesSearch = mod.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCourse =
      filters.courses.length === 0 ||
      filters.courses.some(
        (course) =>
          mod.courses.map((course) => course.course).includes("All courses") ||
          mod.courses.map((course) => course.course).includes(course),
      );

    const matchesSchool =
      filters.schools.length === 0 ||
      filters.schools.includes(mod.moduleProvider);

    const matchesCredits =
      mod.creditUnit >= filters.creditRange.min &&
      mod.creditUnit <= filters.creditRange.max;

    return matchesSearch && matchesCourse && matchesSchool && matchesCredits;
  });

  const toggleFilter = <T extends Exclude<keyof typeof filters, "creditRange">>(
    type: T,
    value: string,
  ) => {
    setFilters((prev) => {
      // Type must be "courses" or "schools"
      // Value is guaranteed to be string here
      const currentArray = prev[type];
      const newArray = currentArray.includes(value as string)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value as string];
      return { ...prev, [type]: newArray };
    });
  };

  const updateCreditRange = (field: "min" | "max", value: number) => {
    setFilters((prev) => ({
      ...prev,
      creditRange: {
        ...prev.creditRange,
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <div className="px-8 py-2 mx-auto text-gray-900 dark:text-white">
        <div className="my-4 text-xl">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search module code or name"
              className="flex-1 p-4 rounded-lg border border-border bg-background text-content-main"
            />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Module List */}
          <div
            className={`flex flex-col ${isMobile ? "w-full" : "w-3/4"} space-y-4 overflow-y-auto max-h-[70vh] scrollbar-hide`}
          >
            {filteredModules.map((module) => (
              <div
                key={module.name}
                className="flex flex-row p-4 rounded-lg border border-border cursor-pointer hover:bg-bg-hover transition-colors"
              >
                <div
                  onClick={() => navigate(`/module/${slugify(module.name)}`)}
                  className={`flex flex-col gap-2 ${isMobile ? "w-full" : "w-4/5"}`}
                >
                  <h3 className="font-bold text-lg text-content-main">
                    {module.name}
                  </h3>
                  <h4 className="text-content-main font-medium mb-2">
                    {module.moduleProvider} • {module.creditUnit} Credits
                  </h4>
                  <p className="text-content-muted">{module.description}</p>
                </div>

                <div
                  className={`flex flex-col w-1/5 min-w-[15vw] pl-4 items-start justify-between text-sm ${isMobile ? "hidden" : ""}`}
                >
                  <div className="flex flex-col items-start">
                    <span className="mb-2 font-bold text-content">
                      Offered By:
                    </span>
                    <div className="flex flex-row gap-2 flex-wrap gap-y-3">
                      {module.courses.map((course) => (
                        <Badge intent="default" key={course.course}>
                          {course.course} - {course.moduleType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-10"></div>
          </div>

          {/* Filters */}
          <div
            className={`w-1/4 p-4 border border-border rounded-lg h-fit ${isMobile ? "hidden" : ""}`}
          >
            <h3 className="font-bold text-lg mb-4 text-content-main">
              Filters
            </h3>

            {/* Course Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-lg text-content-main">
                Course
              </h4>
              <div className="pl-4">
                {availableCourses.map((course) => (
                  <label
                    key={course}
                    className="flex items-center mb-1 text-content-muted"
                  >
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
              <h4 className="font-medium mb-2 text-lg text-content-main">
                School
              </h4>
              <div className="pl-4">
                {availableSchools.map((school) => (
                  <label
                    key={school}
                    className="flex items-center mb-1 text-content-muted"
                  >
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
              <h4 className="font-medium mb-2 text-lg text-content-main">
                Credit Units
              </h4>
              <div className="flex gap-2 items-center pl-4 pt-1">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={filters.creditRange.min}
                  onChange={(e) =>
                    updateCreditRange("min", parseInt(e.target.value) || 1)
                  }
                  className="w-16 p-1 rounded border border-border bg-background text-content-main text-sm"
                />
                <span className="text-content-muted">to</span>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={filters.creditRange.max}
                  onChange={(e) =>
                    updateCreditRange("max", parseInt(e.target.value) || 50)
                  }
                  className="w-16 p-1 rounded border border-border bg-background text-content-main text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
