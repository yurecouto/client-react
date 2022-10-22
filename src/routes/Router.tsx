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
import AdminInfo from "../screens/admin/AdminInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminRoutes/>}>
          <Route path="/home" element={<AdminHome />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/sells" element={<AdminSells />} />
          <Route path="/info" element={<AdminInfo />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Route>

        <Route path="/login" element={<PublicRoutes/>}>
          <Route path="/login" element={<Login />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export { Router }
