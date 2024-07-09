import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WarenkorbProvider from "./context/WarenkorbContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WarenkorbProvider>
      <App />
    </WarenkorbProvider>
  </React.StrictMode>
);
