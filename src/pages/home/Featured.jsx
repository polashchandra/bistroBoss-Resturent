import React from 'react';
import Subtile from './../../component/Subtile';
import frechatpic from "../../assets/assets/home/featured.jpg"
import './featured.css'
const Featured = () => {
    return (
        <div className='feachat py-20 px-20 bg-fixed'>
            <div className='-pt-10]'>
                <Subtile Subtittle="---Check it out---" tittle="FROM OUR MENU"></Subtile>
            </div>
            <div className='flex items-center gap-10 bg-slate-500 bg-opacity-50 w-full h-full'>
                <div>
                    <img src={frechatpic} alt="" />
                </div>
                <div className='text-white space-y-2 '>
                    <p className=' uppercase '>March 20, 2023</p>
                    <p className=' uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 px-10">Order  now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;