import React from 'react';
import Menuitem from '../../../sharefils/Menuitem';
import Cover from '../../../sharefils/Cover/Cover';

const Manucatagory = ({ items,title,img }) => {
    return (
        <div>
            <Cover img={img} title={title}></Cover>
            <div className=' grid md:grid-cols-2 gap-10 my-20'>
                {
                    items.map(item => <Menuitem
                        key={item._id}
                        item={item}></Menuitem>)
                }
            </div>
        </div>
    );
};

export default Manucatagory;