import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/configureStore";
import type { Module } from "@/types/module";
import { useParams } from "react-router";
import { placeholderModules } from "@/mocks/modules";
import { addComment } from "@/slices/comments";

export default function ModuleContainer() {
  const { moduleCode } = useParams();
  const [module, setModule] = useState<Module | null>(null);
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments.list);

  // future note: update this setEffect to fetch data from api
  useEffect(() => {
    const foundModule = placeholderModules.find(
      (mod) => mod.code === moduleCode,
    );

    setModule(foundModule || null);
  }, [moduleCode]);

  // if module is not found, then just show the module not found message
  if (!module) {
    return (
      <div className="container mx-auto text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold">Module not found</h1>
      </div>
    );
  }

  // function to handle submitting comments
  const handleSubmit = (formData: FormData) => {
    const textData = formData.get("comment");

    if (typeof textData !== "string" || textData.trim() === "") {
      alert("Please enter a comment before submitting");
    } else {
      dispatch(
        addComment({
          author: "anon",
          text: textData,
          moduleCode: moduleCode,
          timestamp: Date.now(),
        }),
      );
    }
  };

  return (
    <div>
      <div className="container mx-auto text-gray-900 dark:text-white">
        <header className="text-3xl font-bold my-4">{module.name}</header>

        <div className="text-xl font-semibold">{module.code}</div>

        <div className="text-sm">
          {module.school} • {module.creditUnit.toString()} Credit Units • Year{" "}
          {Math.ceil(module.semester / 2)} Semester {module.semester % 2 || 2}
        </div>

        <div className="bg-indigo dark:bg-gray-800 rounded-lg p-5 border dark:border-gray-600 my-5">
          <h2 className="text-lg font-semibold mb-4">Module description</h2>
          <p>{module.description}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border dark:border-gray-600 my-5">
          <h2 className="text-lg font-semibold mb-4">
            Module review and discussion
          </h2>
          <form
            action={handleSubmit}
            method="post"
            className="flex flex-col gap-4"
          >
            <textarea
              name="comment"
              placeholder="Enter your comments here"
              className="p-2 rounded-lg border dark:bg-gray-800 
                dark:border-gray-700 resize-y"
            ></textarea>
            <button
              type="submit"
              className="self-start px-5 py-2 bg-blue-500 text-white rounded-lg 
                hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
          <div>
            {comments
              .filter((c) => c.moduleCode === moduleCode)
              .map((c) => (
                <div key={c.id} className="my-2">
                  <strong>{c.author}</strong>
                  <p>{c.text}</p>
                  <small>
                    {new Intl.DateTimeFormat("en-SG", {
                      dateStyle: "long",
                      timeStyle: "medium",
                    }).format(c.timestamp)}
                  </small>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
