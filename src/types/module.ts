export type Schools =
  | "School of Architecture & the Built Environment"
  | "School of Business"
  | "School of Chemical & Life Sciences"
  | "School of Computing"
  | "School of Electrical & Electronic Engineering"
  | "Media, Arts & Design School"
  | "School of Mechanical & Aeronautical Engineering"
  | "Singapore Maritime Academy";
export type InternalModuleTypes =
  | "CORE"
  | "PATHWAY"
  | "SPECIALISATION"
  | "COURSE ELECTIVE";
export type ExternalModuleTypes = "CCC" | "ELECTIVE";

export type ModuleType = InternalModuleTypes | ExternalModuleTypes;
export type ModuleProvider = Schools | ExternalModuleTypes;

export type CourseModuleType = {
  course: string;
  yearTaken?: number;
} & (
  | { moduleType: "CORE" }
  | { moduleType: "PATHWAY"; pathwayType: string[] }
  | { moduleType: "SPECIALISATION"; specialisationType: string[] }
  | { moduleType: "CCC" }
  | { moduleType: "COURSE ELECTIVE" }
);

export type Module = {
  name: string;
  description: string;
  moduleProvider: ModuleProvider;
  creditUnit: number;
  effortRequired: string;
  courses: CourseModuleType[];
};
