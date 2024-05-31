import React from 'react';
import Subtile from './../../component/Subtile';
import picture from '../../assets/assets/menu/salad-bg.jpg';
import picture2 from '../../assets/assets/menu/dessert-bg.jpeg';
import picture3 from '../../assets/assets/menu/pizza-bg.jpg';

const Recomanded = () => {
    return (
        <section className='my-20'>
            <Subtile
                Subtittle={"---Should Try---"}
                tittle={"CHEF RECOMMENDS"}
            />
            <div className='flex gap-6 justify-center'>

                <div className="card w-[424px] h-[541px] bg-base-100 shadow-xl rounded-none flex flex-col">
                    <div className="w-full h-64">
                        <img src={picture2} alt="Dessert" className="object-cover w-full h-full" />
                    </div>
                    <div className="card-body flex flex-col items-center text-center flex-grow">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mt-auto">
                            <button className=" text-white btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">Add to Card</button>
                        </div>
                    </div>
                </div>

                <div className="card w-[424px] h-[541px] bg-base-100 shadow-xl rounded-none flex flex-col">
                    <div className="w-full h-64">
                        <img src={picture3} alt="Pizza" className="object-cover w-full h-full" />
                    </div>
                    <div className="card-body flex flex-col items-center text-center flex-grow">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mt-auto">
                            <button className="text-white btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">Add to Card</button>
                        </div>
                    </div>
                </div>

                <div className="card w-[424px] h-[541px] bg-base-100 shadow-xl rounded-none flex flex-col">
                    <div className="w-full h-64">
                        <img src={picture} alt="Salad" className="object-cover w-full h-full" />
                    </div>
                    <div className="card-body flex flex-col items-center text-center flex-grow">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mt-auto">
                            <button className="text-white btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">Add to Card</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Recomanded;
