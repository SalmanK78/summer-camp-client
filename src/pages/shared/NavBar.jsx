import { Link } from "react-router-dom";


const NavBar = () => {
    const user = true
    const handleLogOut = () => {
        
    }
    
    const options = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/">Classes</Link></li>
        {
            user ? <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li onClick={handleLogOut}><Link to="/login">LogOut</Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className=" navbar fixed max-w-screen-xl bg-gray-100 shadow-2xl rounded-md text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {options}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Summer Camp</a>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {options}
                    </ul>

                </div>
                <div className="navbar-end">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;