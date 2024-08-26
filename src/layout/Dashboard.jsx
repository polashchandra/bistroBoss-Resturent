import React from 'react';
import { FaBookBible, FaCartArrowDown, FaHouseChimneyWindow, FaMagnifyingGlassArrowRight, FaStreetView, FaUser } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import { ImSpoonKnife } from "react-icons/im";
const Dashboard = () => {
    return (
        <div className='flex'>
            <div className=" w-64 min-h-screen bg-orange-400">
                <ul className="menu gap-4">
                    <li>
                        <NavLink to="/deashbord/cart">
                       <FaHouseChimneyWindow></FaHouseChimneyWindow>
                        Home</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/deashbord/cart">
                        <ImSpoonKnife />
                        Add items</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/deashbord/cart">
                        <FaMagnifyingGlassArrowRight></FaMagnifyingGlassArrowRight>
                        ManageItem</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/deashbord/cart">
                       <FaCartArrowDown></FaCartArrowDown>
                        My cart</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/deashbord/cart">
                       <FaStreetView></FaStreetView>
                        Add reviwe</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/deashbord/user">
                       <FaUser></FaUser>
                        all user</NavLink>
                        
                    </li>
                    <div className="divider">OR</div>

                    <li className='text-slate-950'>
                        <NavLink to="/">
                       <FaHouseChimneyWindow></FaHouseChimneyWindow>
                        Home</NavLink>
                        
                    </li>
                    <li className='text-slate-950'>
                        <NavLink to="/menu">
                       <FaHouseChimneyWindow></FaHouseChimneyWindow>
                        Home</NavLink>
                        
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;