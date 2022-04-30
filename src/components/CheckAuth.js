import { Outlet, Navigate } from "react-router-dom"

const CheckAuth = () => {
  // TODO: Use a proper auth mechanism.
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default CheckAuth
