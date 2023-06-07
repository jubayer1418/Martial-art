import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer";
import Navbar from "../Page/Shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
