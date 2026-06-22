import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import DataOwnerLogin from "./pages/DataOwnerLogin";
import DataUserLogin from "./pages/DataUserLogin";
import Register from "./pages/Register";

import UploadDocument from "./pages/UploadDocument";
import SearchDocument from "./pages/SearchDocument";
import Cloud from "./pages/Cloud";
import DashboardAnalytics from "./pages/DashboardAnalytics";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";


import CloudInfo from "./pages/CloudInfo";
import UploadInfo from "./pages/UploadInfo";
import SearchInfo from "./pages/SearchInfo";



import "./styles/Main.css";

function App() {
  

  return (
    <div >

      {/* 🌙 DARK MODE TOGGLE (GLOBAL UI BUTTON) */}
      {/* <button
        className="dark-toggle"
        onClick={() => setDark(!dark)}
      >
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button> */}

      {/* ROUTER */}
      <BrowserRouter>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* AUTH */}
          <Route path="/register" element={<Register />} />
          <Route path="/owner" element={<DataOwnerLogin />} />
          <Route path="/user" element={<DataUserLogin />} />

          <Route path="/cloud" element={<CloudInfo />} />
<Route path="/upload" element={<UploadInfo />} />
<Route path="/search-info" element={<SearchInfo />} />


          {/* DASHBOARD (PROTECTED WRAPPER) */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >

            {/* DEFAULT DASHBOARD */}
            <Route index element={<h2>Welcome Dashboard</h2>} />

            {/* OWNER ONLY */}
            <Route
  path="upload"
  element={
    <PrivateRoute allowedRoles={["DATA_OWNER"]}>
      <UploadDocument />
    </PrivateRoute>
  }
/>

            {/* USER ONLY */}
            <Route
              path="search"
              element={
                <PrivateRoute role="DATA_USER">
                  <SearchDocument />
                </PrivateRoute>
              }
            />

            {/* CLOUD (BOTH ROLES) */}
            <Route
  path="cloud"
  element={
    <PrivateRoute allowedRoles={["DATA_OWNER"]}>
      <Cloud />
    </PrivateRoute>
  }
/>



            <Route
  path="analytics"
  element={
    <PrivateRoute>
      <DashboardAnalytics />
    </PrivateRoute>
  }
/>

          </Route>

          {/* OLD ROUTES REDIRECT */}
          {/* <Route path="/upload" element={<Navigate to="/dashboard/upload" />} /> */}
          {/* <Route path="/search" element={<Navigate to="/dashboard/search" />} /> */}
          {/* <Route path="/cloud" element={<Navigate to="/dashboard/cloud" />} /> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;