import React from "react";
import ReactDOM from "react-dom/client";

import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
