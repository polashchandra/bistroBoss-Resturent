import React from 'react';
import useAuth from '../../component/custom/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, recipe, price, image } = item;
    const {user}=useAuth()
    const navigate=useNavigate()
    const handleaddTocart=food=>{
        if(user&&user.email){
            //send cart to the database
        }
        else{
            Swal.fire({
                title: "you are logged in",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login")
                }
              });
        }
        
    }
    return (
        <div><div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-8 px-4'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                
                <p>{recipe}</p>
                <div onClick={handleaddTocart} className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;