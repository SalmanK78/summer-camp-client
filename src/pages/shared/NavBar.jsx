import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";


const NavBar = () => {
    const {user,logOut} = useAuth()
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()
    console.log(isInstructor)
    const photo = 'https://pbs.twimg.com/profile_images/898054973510103040/EjHmKOk__400x400.jpg'
    const handleLogOut = () => {
        logOut()
        .then(res =>{

        })
    }
    
    const options = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/classes">Classes</NavLink></li>
        
        {!isInstructor && !isAdmin && <li><NavLink to="instructorreq">Join As Instructor</NavLink></li>}
        <li><Link to="/instructors">Instructors</Link></li>
        {isInstructor &&
            <>
            <li><Link to="/addclasses">Add Classes</Link></li>
            </>
        }
        {
            user ? <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li onClick={handleLogOut}><Link>LogOut</Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className=" navbar  max-w-screen-xl bg-gray-100 shadow-2xl rounded-md text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {options}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Music School Camp</a>
                </div>
                <div className="navbar-center invisible lg:relative absolute lg:visible">
                    <ul className="menu menu-horizontal px-1">
                        {options}
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={user?.photoURL? `${user.photoURL}`: `${photo}`} alt="" />
                </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;