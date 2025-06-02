import * as React from "react";
import { Route, Routes } from "react-router";

import HomeContainer from "../static/HomeContainer";
import AboutContainer from "@/views/static/AboutContainer";
import SearchModuleContainer from "../static/SearchModuleContainer";
import DemoContainer from "@/views/static/DemoContainer";
import SettingsContainer from "@/views/settings/SettingsContainer";
import ContributorList from "@/views/static/ContributorList";

const PageRoutes: React.FC = () => (
  <Routes>
    <Route path="/" Component={HomeContainer} />
    <Route path="/about" Component={AboutContainer} />
    <Route path="/module" Component={SearchModuleContainer} />
    <Route path="/module/:moduleCode" Component={DemoContainer} />
    <Route path="/settings" Component={SettingsContainer} />
    <Route path="/contributors" Component={ContributorList} />
  </Routes>
);

export default PageRoutes;
