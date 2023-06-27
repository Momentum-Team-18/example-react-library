import { Outlet, Navigate } from 'react-router-dom'

const RequireAuth = ({ token }) => {
  if (!token) {
    return <Navigate to="/login" replace={true} />
  }
  return <Outlet />
}

export default RequireAuth
