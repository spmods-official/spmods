import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/configureStore";
import type { Module } from "@/types/module";
import { useParams } from "react-router";
import { placeholderModules } from "@/mocks/modules";
import { addComment } from "@/slices/comments";


export default function DemoContainer() {
  const { moduleCode } = useParams();
  const [module, setModule] = useState<Module | null>(null);

  // future note: update this setEffect to fetch data from api
  useEffect(() => {
    const foundModule = placeholderModules.find(mod => mod.code === moduleCode);

    setModule(foundModule || null);
  })

  // if module is not found, then just show the module not found message
  if (!module) {
    return <div className="container mx-auto text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">Module not found</h1>
    </div>;
  }

  // get comments from redux store
  // const comments = useSelector((state: RootState) => state.comments.list);
  const comments = (state: RootState) => state.comments.list;

  return <div>

    <div className="container mx-auto text-gray-900 dark:text-white" >

      <header className="text-3xl font-bold my-4">
        {module.name}
      </header>

      <div className="text-xl font-semibold">
        {module.code}
      </div>

      <div className="text-sm">
        {module.school} • {module.creditUnit.toString()} Credit Units • Year {Math.ceil(module.semester/2)} Semester {module.semester % 2 || 2}
      </div>

      <div className="bg-indigo dark:bg-gray-800 rounded-lg p-5 border dark:border-gray-600 my-5">
        <h2 className="text-lg font-semibold mb-4">Module description</h2>
        <p>
          {module.description}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border dark:border-gray-600 my-5">
        <h2 className="text-lg font-semibold mb-4">Module review and discussion</h2>
        <div>
          {/* loop through each comment, filter by the module selected*/}
        </div>
      </div>

    </div>

  </div>;
}
