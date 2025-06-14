import * as React from "react";
import { Route, Routes } from "react-router";

import AboutContainer from "@/views/static/AboutContainer";
import SearchModuleContainer from "@/views/modules/SearchModuleContainer";
import ModuleContainer from "@/views/modules/ModuleContainer";
import SettingsContainer from "@/views/settings/SettingsContainer";
import ContributorList from "@/views/static/ContributorList";

const PageRoutes: React.FC = () => (
  <Routes>
    <Route path="/" Component={SearchModuleContainer} />
    <Route path="/about" Component={AboutContainer} />
    <Route path="/module/:moduleName" Component={ModuleContainer} />
    <Route path="/settings" Component={SettingsContainer} />
    <Route path="/contributors" Component={ContributorList} />
  </Routes>
);

export default PageRoutes;
