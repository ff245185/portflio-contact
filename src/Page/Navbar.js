import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Demo Project</Link></li>
                        <li><Link>demo ss</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Tecno Graphy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link >Home</Link></li>
                    <li><Link>Demo Project</Link></li>
                    <li><Link>demo ss</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/contact"} className="btn">Contact us</Link>
            </div>
        </div>
    );
};

export default Navbar;