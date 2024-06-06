import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
