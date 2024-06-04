import React, { useState } from 'react';
import Cover from '../../sharefils/Cover/Cover';
import shopcover from '../../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../component/custom/useMenu';
const Ourshop = () => {
    const [tabindex,settabindex]=useState(0)
    const [menu]=useMenu()
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const offered=menu.filter(item=>item.category==='offered')
    const dessert=menu.filter(item=>item.category==='dessert')
    const pizza=menu.filter(item=>item.category==='pizza')
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
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Ourshop;