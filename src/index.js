import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "context/Authprovider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MaterialUIControllerProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MaterialUIControllerProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
