import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error404 from "../Page/404/error404";

import Dashboard from "../Layout/Dashboard";
import Classes from "../Page/Home/Classes";
import Home from "../Page/Home/Home";
import Instructors from "../Page/Home/Instructors";
import Login from "../Page/Login/Login";
import SingUp from "../Page/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
]);
export default router;
