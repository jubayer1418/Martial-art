import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error404 from "../Page/404/error404";

import Dashboard from "../Layout/Dashboard";
import AddClasses from "../Page/Dashboard/AddClasses";
import ManageClasses from "../Page/Dashboard/ManageClasses";
import ManageUser from "../Page/Dashboard/ManageUser";
import MyClasses from "../Page/Dashboard/MyClasses";
import UpdateClass from "../Page/Dashboard/UpdateClass";
import Welcome from "../Page/Dashboard/Welcome";
import MyAddClasses from "../Page/Dashboard/studentboard/MyAddClasses";
import MyEndrol from "../Page/Dashboard/studentboard/MyEndrol";
import PaymentHistory from "../Page/Dashboard/studentboard/PaymentHistory";
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
        path: "mysectionclass",
        element: (
          <AdminRoute>
            <MyAddClasses></MyAddClasses>
          </AdminRoute>
        ),
      },
      {
        path: "endrol",
        element: (
          <AdminRoute>
            <MyEndrol></MyEndrol>
          </AdminRoute>
        ),
      },
      {
        path: "myhistory",
        element: (
          <AdminRoute>
            <PaymentHistory></PaymentHistory>
          </AdminRoute>
        ),
      },
      {
        path: "addclasses",
        element: (
          <AdminRoute>
            <AddClasses></AddClasses>
          </AdminRoute>
        ),
      },
      {
        path: "myclasses/updateclass/:id",
        element: (
          <AdminRoute>
            <UpdateClass></UpdateClass>
          </AdminRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <AdminRoute>
            <MyClasses></MyClasses>
          </AdminRoute>
        ),
      },
      {
        path: "welcome",
        element: <Welcome></Welcome>,
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
