import React from "react";
import ReactDOM from "react-dom/client";
import { CalendarApp } from "./CalendarApp";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CalendarApp />
  </BrowserRouter>
);
