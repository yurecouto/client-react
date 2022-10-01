import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminRoutes from "./AdminRoutes";
import PublicRoutes from "./PublicRoutes";

import AdminHome from "../screens/admin/AdminHome";
import Login from "../screens/public/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminRoutes/>}>
          <Route path="/admin/home" element={<AdminHome />} />
        </Route>

        <Route path="/login" element={<PublicRoutes/>}>
          <Route path="/login" element={<Login />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

