
import { Outlet } from 'react-router-dom';
import Navbar from '../sharefils/Navbar';
import Footer from '../sharefils/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;