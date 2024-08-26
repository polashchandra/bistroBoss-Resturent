import React from 'react';
import { FaGoogle, FaGoogleWallet } from "react-icons/fa";
import useAuth from './../custom/useAuth';
import Useaxiospublic from './../custom/Useaxiospublic';
import { useNavigate } from 'react-router-dom';


const Sociallogin = () => {
    const{googlesignIn}=useAuth()
    const axiospublic=Useaxiospublic()
    const navigate=useNavigate()
    const handlegoolesignIn=()=>{
        googlesignIn()
        .then(result=>{
            console.log(result);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiospublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div className='p-8'>
            <div className='px-auto'>
                <button onClick={handlegoolesignIn} className="btn">
                <FaGoogle />
                    Google
                </button>
                <button className="btn ml-4">
                < FaGoogleWallet />
                    GoogleWallet
                </button>
            </div>
        </div>
    );
};

export default Sociallogin;