import { FaHome } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

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
          {isAdmin?.role == "student" && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="mysectionclass"
                >
                  My Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="endrol"
                >
                  My Enroled
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="myhistory"
                >
                  Payment history
                </NavLink>
              </li>
            </>
          )}
          {isAdmin?.role == "instructor" && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="addclasses"
                >
                  Add Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="myclasses"
                >
                  My Classes
                </NavLink>
              </li>
            </>
          )}
          {isAdmin?.role == "admin" && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="manageclasses"
                >
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                  }
                  to="manageusers"
                >
                  Manage Users
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <SiGoogleclassroom></SiGoogleclassroom> All Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <MdIntegrationInstructions></MdIntegrationInstructions>All
              Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
