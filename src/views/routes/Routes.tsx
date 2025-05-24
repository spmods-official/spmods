import * as React from "react";
import { Route, Routes } from "react-router";

import AboutContainer from "@/views/static/AboutContainer";
import DemoContainer from "@/views/static/DemoContainer";
import SettingsContainer from "@/views/settings/SettingsContainer";

const PageRoutes: React.FC = () => (
  <Routes>
    <Route path="/" Component={DemoContainer} />
    <Route path="/about" Component={AboutContainer} />
    <Route path="/settings" Component={SettingsContainer} />
  </Routes>
);

export default PageRoutes;
