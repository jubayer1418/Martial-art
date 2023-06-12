import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useCategory";
import Loder from "../Page/Shared/Loder";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isCategory, isCategoryLoading] = useAdmin();
  const location = useLocation();
  if (loading || isCategoryLoading) {
    return <Loder></Loder>;
  }
  if (
    (user && isCategory?.role == "admin") ||
    isCategory?.role == "student" ||
    isCategory?.role == "instructor"
  ) {
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
