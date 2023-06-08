import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              My Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              My Enroled
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              My Enroled Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              Payment history
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              Add Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              My Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
              }
              to="/classes"
            >
              Manage Users+
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes"> Our Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">All Instructors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
