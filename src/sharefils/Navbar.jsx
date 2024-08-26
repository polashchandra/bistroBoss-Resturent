import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navgite = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Manu</Link></li>
        <li><Link to="/shop">Our Shop</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/deashbord/cart">
            <button className="btn bg-none">
                <FaCartShopping></FaCartShopping>
                <div className="badge badge-secondary">+99</div>
            </button>
        </Link></li>
        {
            user ? <>
                <button onClick={handlelogout} className="btn btn-outline btn-accent px-6 items-center">logOut</button>
            </> :
                <>
                    <li><Link to="/login">Login</Link></li>

                </>
        }


    </>
    return (
        <div>
            <div className="navbar fixed bg-black text-white bg-opacity-30 z-50 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navgite}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navgite}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;