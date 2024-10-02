import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const main = () => {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

main();
