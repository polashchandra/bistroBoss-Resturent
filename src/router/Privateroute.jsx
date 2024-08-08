import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
            if(loading){
                return <span className="loading loading-infinity loading-lg"></span>
            }
            if(user){
                return children
            }
            return <Navigate to="/login" state={{ from: location }} replace ></Navigate>

};

export default Privateroute;