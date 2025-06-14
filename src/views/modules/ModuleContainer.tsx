import { useEffect, useState, useMemo } from "react";
import type { Module } from "@/types/module";
import { useParams } from "react-router";
import { placeholderModules } from "@/mocks/modules";
import Remark42 from "../components/Remark42";
import useColorScheme from "../hooks/useColorScheme";
import { DARK_COLOR_SCHEME } from "@/types/settings";
import { slugify } from "@/utils/slugify";
import useMediaQuery from "../hooks/useMediaQuery";

export default function ModuleContainer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { moduleName } = useParams();
  const [module, setModule] = useState<Module | null>(null);

  const colorScheme = useColorScheme();
  const remarkTheme = useMemo(
    () => (colorScheme === DARK_COLOR_SCHEME ? "dark" : "light"),
    [colorScheme],
  );

  // future note: update this setEffect to fetch data from api
  useEffect(() => {
    const foundModule = placeholderModules.find(
      (mod) => slugify(mod.name) === moduleName,
    );

    if (!foundModule) {
      return;
    }

    setModule(foundModule);
  }, [moduleName]);

  // if module is not found, then just show the module not found message
  if (!module) {
    return (
      <div className="mx-auto text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold">Module not found</h1>
      </div>
    );
  }
  return (
    <div className={`${isMobile ? "w-full" : "w-4/5"} h-full`}>
      <div className="text-content h-full flex flex-col">
        <div className="flex flex-col gap-y-1 py-4">
          <header className="text-primary font-semibold text-4xl">
            {module.name}
          </header>

          <div className="text-xl">
            {module.school} • {module.creditUnit.toString()} Credit Units
          </div>
        </div>

        <hr className="text-content" />

        <div className="rounded-lg my-5">
          <h2 className="text-lg font-bold mb-4">Module description</h2>
          <p>{module.description}</p>
          <p className="font-bold mt-4">
            Workload - {module.creditUnit * 15} hrs / Week
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
