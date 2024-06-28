import React, { useState } from 'react';
import Cover from '../../sharefils/Cover/Cover';
import shopcover from '../../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../component/custom/useMenu';
import CatagoryFood from './CatagoryFood';
const Ourshop = () => {
    const [tabindex, settabindex] = useState(0)
    const [menu] = useMenu()
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Cover img={shopcover} title="Our Shop"></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) => settabindex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>desert</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <CatagoryFood items={salad}></CatagoryFood>
                </TabPanel>
                <TabPanel>
                    <CatagoryFood items={soup}></CatagoryFood>
                </TabPanel>
                <TabPanel>
                    <CatagoryFood items={drinks}></CatagoryFood>
                </TabPanel>
                <TabPanel>
                    <CatagoryFood items={dessert}></CatagoryFood>
                </TabPanel>
                <TabPanel>
                    <CatagoryFood items={pizza}></CatagoryFood>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Ourshop;