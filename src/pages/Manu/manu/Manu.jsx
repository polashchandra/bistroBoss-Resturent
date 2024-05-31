import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../sharefils/Cover/Cover';
import menuherox from '../../../assets/assets/menu/banner3.jpg'
import Populermanu from '../../home/Fooditem/Populermanu';
import { Parallax } from 'react-parallax';
const Manu = () => {
    return (
        <div>
            <Helmet>
                <title>BistroBoss | menu</title>
            </Helmet>
            <Cover img={menuherox} title='OUR MENU'></Cover>


        </div>
    );
};

export default Manu;