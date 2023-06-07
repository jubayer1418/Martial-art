import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Page/Dashboard/Dashboard";
import Classes from "../Page/Home/Classes";
import Home from "../Page/Home/Home";
import Instructors from "../Page/Home/Instructors";
import Login from "../Page/Login/Login";
import SingUp from "../Page/SingUp/SingUp";
const router = createBrowserRouter([
  {
    path: "/",
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
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
]);
export default router;
