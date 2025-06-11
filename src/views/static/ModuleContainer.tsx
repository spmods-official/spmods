import { useEffect, useState, useMemo } from "react";
import type { Module } from "@/types/module";
import { useParams } from "react-router";
import { placeholderModules } from "@/mocks/modules";
import Remark42 from "../components/Remark42";
import useColorScheme from "../hooks/useColorScheme";
import { DARK_COLOR_SCHEME } from "@/types/settings";

export default function ModuleContainer() {
  const { moduleName } = useParams();
  const [module, setModule] = useState<Module | null>(null);

  const colorScheme = useColorScheme();
  const remarkTheme = useMemo(
    () => (colorScheme === DARK_COLOR_SCHEME ? "dark" : "light"),
    [colorScheme],
  );

  // future note: update this setEffect to fetch data from api
  useEffect(() => {
    console.log(moduleName);
    const foundModule = placeholderModules.find(
      (mod) => mod.name === moduleName,
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
    <div className="w-4/5 h-full">
      <div className="text-content h-full flex flex-col">
        <div className="flex flex-col gap-y-1 py-4">
          <header className="text-primary font-semibold text-4xl">
            {module.code}
          </header>
          <div className="text-3xl font-bold">{module.name}</div>

          <div className="text">
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
              host="http://127.0.0.1:8080"
              siteId="remark"
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
