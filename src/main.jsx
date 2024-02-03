import React from "react";
import ReactDOM from "react-dom/client";
import { DictionaryProvider } from "./context/DictionaryProvider";
import App from "./components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>
);
