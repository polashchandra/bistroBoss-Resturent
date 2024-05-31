import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../sharefils/Cover/Cover';
import menuherox from '../../../assets/assets/menu/banner3.jpg'
import pizzae from '../../../assets/assets/menu/pizza-bg.jpg'
import cake from '../../../assets/assets/menu/dessert-bg.jpeg'
import cake1 from '../../../assets/assets/shop/banner2.jpg'
import soup1 from '../../../assets/assets/menu/soup-bg.jpg'
import salad1 from '../../../assets/assets/menu/salad-bg.jpg'
import Subtile from '../../../component/Subtile';
import useMenu from '../../../component/custom/useMenu';
import Manucatagory from './Manucatagory';

const Manu = () => {
    const [menu]=useMenu()
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const offered=menu.filter(item=>item.category==='offered')
    const dessert=menu.filter(item=>item.category==='dessert')
    const pizza=menu.filter(item=>item.category==='pizza')
    return (
        <div>
            <Helmet>
                <title>BistroBoss | menu</title>
            </Helmet>
            <Cover img={menuherox} title='OUR MENU'></Cover>
            <Subtile Subtittle="---Don't miss---" tittle="TODAY'S OFFER"></Subtile>
            <Manucatagory items={offered} title="Offer" img={cake1}></Manucatagory>
            <Manucatagory items={pizza} title="PIZZA" img={pizzae}></Manucatagory>
            <Manucatagory items={dessert} title="Dessert" img={cake}></Manucatagory>
            <Manucatagory items={salad} title="PIZZA" img={salad1}></Manucatagory>
            <Manucatagory items={soup} title="PIZZA" img={soup1}></Manucatagory>
        </div>
    );
};

export default Manu;