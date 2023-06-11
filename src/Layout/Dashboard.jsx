import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {


  const isAdmin = true;
  const isInstructor = true

  return (
    
    <div className="max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
            <li><NavLink to="selectedclasses">Selected Classes</NavLink></li>
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
