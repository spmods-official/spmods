import React from "react";
import { useEffect, useState } from "react";
import type { Module } from "@/types/module";
import { useParams } from "react-router";

// placeholder mods until we have the actual ones
const placeholderModules: Module[] = [
  {
    name: "Fundamentals of Programming",
    code: "ST0502",
    school: "School of Computing",
    creditUnit: 6,
    semester: 1,
    description: "Introduction to programming concepts using JavaScript"
  },
  {
    name: "Fundamentals of Computing",
    code: "ST0503",
    school: "School of Computing",
    creditUnit: 4,
    semester: 1,
    description: "Learning the basics of how computer works"
  },
  {
    name: "Mathematics",
    code: "ST0504",
    school: "School of Computing",
    creditUnit: 4,
    semester: 1,
    description: "Mathematics for computing, involving matrices, linear algebra, etc"
  }
];

export default function DemoContainer() {
  const { moduleCode } = useParams();
  const module, setModule = useState<Module | null>(null);



  return <div>

    <div className="container mx-auto text-gray-900 dark:text-white" >

      <header className="text-3xl font-bold mb-4">
        {module.}
      </header>

      <div className="text-xl font-semibold">
        ST0502
      </div>

      <div className="text-sm">
        School Of Computing • 6 CU • Year 1 Semester 2
      </div>

      <div>
        <p>
          Lorem ipsum
        </p>
      </div>

    </div>

  </div>;
}
