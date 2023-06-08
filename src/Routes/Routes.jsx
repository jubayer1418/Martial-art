import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error404 from "../Page/404/error404";

import Dashboard from "../Layout/Dashboard";
import AddClasses from "../Page/Dashboard/AddClasses";
import ManageClasses from "../Page/Dashboard/ManageClasses";
import ManageUser from "../Page/Dashboard/ManageUser";
import MyClasses from "../Page/Dashboard/MyClasses";
import Classes from "../Page/Home/Classes";
import Home from "../Page/Home/Home";
import Instructors from "../Page/Home/Instructors";
import Login from "../Page/Login/Login";
import SingUp from "../Page/SingUp/SingUp";
import AdminRoute from "./AdminRoute";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404></Error404>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addclasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
]);
export default router;
