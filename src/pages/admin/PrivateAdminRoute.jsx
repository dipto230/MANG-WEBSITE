import React from "react"
import { Navigate } from "react-router-dom"

const PrivateAdminRoute = ({ children }) => {
  const isAuth = localStorage.getItem("adminAuth")

  return isAuth ? children : <Navigate to="/admin-login" />
}

export default PrivateAdminRoute
