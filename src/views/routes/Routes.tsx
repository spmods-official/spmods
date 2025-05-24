import * as React from "react";
import { Route, Routes } from "react-router";

import AboutContainer from "@/views/static/AboutContainer";
import DemoContainer from "@/views/static/DemoContainer";
import SettingsContainer from "@/views/settings/SettingsContainer";
import ContributorList from "@/views/static/ContributorList";

const PageRoutes: React.FC = () => (
  <Routes>
    <Route path="/" Component={DemoContainer} />
    <Route path="/about" Component={AboutContainer} />
    <Route path="/settings" Component={SettingsContainer} />
    <Route path="/contributors" Component={ContributorList} />
  </Routes>
);

export default PageRoutes;
