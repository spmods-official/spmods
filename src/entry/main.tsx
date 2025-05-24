import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import App from "./App";

import PageRoutes from "@/views/routes/Routes";

import { BrowserRouter as Router } from "react-router";

import { Provider } from "react-redux";

import { store } from "@/app/configureStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <PageRoutes />
        </App>
      </Router>
    </Provider>
  </StrictMode>,
);
