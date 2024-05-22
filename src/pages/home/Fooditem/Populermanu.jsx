import React, { useEffect, useState } from 'react';
import Subtile from './../../../component/Subtile';
import Menuitem from '../../../sharefils/Menuitem';

const Populermanu = () => {
    const [menu,setmenu]=useState([])
    useEffect(()=>{
        fetch('manu.json')
        .then(res=>res.json())
        .then(data=>{
            const populermanu=data.filter(item=>item.category==="pizza").slice(0,6)
            setmenu(populermanu)}
    )
    })
    return (
        <section className='mb-12'>
            <Subtile
            Subtittle={"---Check it out---"}
            tittle={"FROM OUR MENU"}
            ></Subtile>
            <div className=' grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item=><Menuitem 
                        key={item._id}
                        item={item}></Menuitem>)
                }
            </div>
        </section>
    );
};

export default Populermanu;