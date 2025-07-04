import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import Remark42 from "../components/Remark42";
import useColorScheme from "../hooks/useColorScheme";
import { DARK_COLOR_SCHEME } from "@/types/settings";
import { useSelector } from "react-redux";
import { selectModuleBySlug } from "@/slices/modules";
import useMediaQuery from "../hooks/useMediaQuery";
import { selectModulesStatus, fetchAllModules } from "@/slices/modules";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/configureStore";
import type { CourseModuleType } from "@/types/module";

export default function ModuleContainer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { moduleName } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectModulesStatus);
  const module = useSelector((state) => selectModuleBySlug(state, moduleName));

  useEffect(() => {
    // Only dispatch if the status is 'idle' to prevent re-fetching on every render
    if (status === "idle") {
      dispatch(fetchAllModules());
    }
  }, [dispatch, status]);

  const colorScheme = useColorScheme();
  const remarkTheme = useMemo(
    () => (colorScheme === DARK_COLOR_SCHEME ? "dark" : "light"),
    [colorScheme],
  );

  // if module is not found, then just show the module not found message
  if (!module) {
    return (
      <div className="mx-auto text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold">Module not found</h1>
      </div>
    );
  }

  const formatSpecilisationAndPathway = (items: string[]) => {
    if (items.length === 0) return "";
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} or ${items[1]}`;

    // For 3 or more items: join all but last with commas, then add "or" before the last item
    const allButLast = items.slice(0, -1).join(", ");
    const lastItem = items[items.length - 1];
    return `${allButLast} or ${lastItem}`;
  };

  const moduleInfo = (course: CourseModuleType) => {
    switch (course.moduleType) {
      case "CCC":
        return "via Common Core Curriculum";

      case "CORE":
        return "as a core module";

      case "COURSE ELECTIVE":
        return "as a course elective";

      case "SPECIALISATION":
        return `via the ${formatSpecilisationAndPathway(course.specialisationType)} specialisation`;

      case "PATHWAY":
        return `via the ${formatSpecilisationAndPathway(course.pathwayType)}`;
    }
  };

  return (
    <div className={`${isMobile ? "w-full" : "w-4/5"} h-full`}>
      <div className="text-content h-full flex flex-col">
        <div className="flex flex-col gap-y-1 py-4">
          <header className="text-primary font-semibold text-4xl">
            {module.name}
          </header>

          <div className="text-xl">
            {module.moduleProvider} • {module.creditUnit.toString()} Credit
            Units
          </div>
        </div>

        <hr className="text-content" />

        <div className="rounded-lg my-5">
          <h2 className="text-lg font-bold mb-4">Module description</h2>
          <p>{module.description}</p>

          <p className="font-bold mb-2 mt-4">Available to:</p>
          <ul>
            {module.courses.map((course) => (
              <li className="list-disc ml-6" key={course.course}>
                {course.course} {moduleInfo(course)}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-4">
            Workload - {`${module.effortRequired}`}
          </p>
        </div>

        <hr className="text-content" />

        <div className="my-5">
          <h2 className="text-lg font-bold mb-4">
            Module review and discussion
          </h2>

          <div className="flex flex-col gap-y-2">
            <Remark42
              host="https://remark.spmods.org"
              siteId="SPMods"
              theme={remarkTheme}
              components={["embed"]}
              noFooter={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
