import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminRoutes from "./AdminRoutes";
import PublicRoutes from "./PublicRoutes";

import { Login } from "../screens/public/Login/index";

import AdminHome from "../screens/admin/AdminHome/index";
import AdminUsers from "../screens/admin/AdminUsers";
import AdminProducts from "../screens/admin/AdminProducts";
import AdminSells from "../screens/admin/AdminSells";
import AdminSettings from "../screens/admin/AdminSettings";
import AdminInfo from "../screens/admin/AdminUsers";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminRoutes/>}>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/sells" element={<AdminSells />} />
          <Route path="/admin/info" element={<AdminInfo />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>

        <Route path="/login" element={<PublicRoutes/>}>
          <Route path="/login" element={<Login />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export { Router }
