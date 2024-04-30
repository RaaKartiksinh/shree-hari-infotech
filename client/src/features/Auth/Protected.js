import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { selectLoggedInUserToken } from "./authSlice";
import { useSelector } from "react-redux";

export default function Protected() {
  const isAdminAvailable = useSelector(selectLoggedInUserToken);
  // return isAdminAvailable ? <Outlet /> : <Navigate to="/login" />;
  return isAdminAvailable ? <Outlet /> : <Outlet />;
}
