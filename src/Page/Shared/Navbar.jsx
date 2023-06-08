import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import img from "../../assets/Brown Abstract The Lion Free Logo.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#E0B573] " : "hover:text-[#E0B573]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
          }
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
          }
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#080C1C] sticky top-0   opacity-90 h-40  z-10  md:px-24 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none "
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <Link to={"/"} className=" flex items-center">
          <img className="h-20 rounded-full" src={img} alt="" />
          <h1 className="font-bold max-md:hidden text-[#E0B573]  text-3xl pl-2">
            The Lion Martial Art
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-xl">
          {navOption}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]"
            to="login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
