import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
} from "react-icons/fa";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

  const[isInstructor] = useInstructor()
  const [isAdmin] = useAdmin()

  return (
    
    <div className="max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="mx-5 drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? <>
              <li><NavLink to="allusers">All Users</NavLink></li>
              <li><NavLink to="requests">Requests</NavLink></li>
            </>:<>
            <li><NavLink to="selectedclasses">Selected Classes</NavLink></li>
            </>

            }
            {isInstructor &&
                <div>
                    <li><NavLink to="myclasses">My Classes</NavLink></li>
                </div>
            }
            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
            <li><NavLink to="/classes">Classes</NavLink></li>
            <li><NavLink to="/instructors">Instructors</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
