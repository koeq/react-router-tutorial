import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "./Home.css";
import { Home } from "./components/Home";
import { Learn } from "./components/Learn";
import CourseId from "./components/CourseId";
import reportWebVitals from "./reportWebVitals";

import Courses from "./components/Courses";
import Boundles from "./components/Boundles";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    {/* ROUTER */}
    <BrowserRouter>
      <Routes>
        {/* / is home route */}
        <Route path="/" element={<Home />} />
        {/* <Navigate to="/learn" redirects */}
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseId" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Boundles />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
