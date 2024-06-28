import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, price, image } = item;
    return (
        <div><div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-8 px-4'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;