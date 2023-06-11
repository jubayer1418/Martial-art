import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";
import Loder from "../Page/Shared/Loder";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loder></Loder>;
  }
  if (user && isAdmin?.role == "admin") {
    return children;
  }
  return (
    <Navigate
      to={"/dashboard/welcome"}
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default AdminRoute;
