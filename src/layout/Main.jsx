
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../sharefils/Navbar';
import Footer from '../sharefils/Footer';

const Main = () => {
    const location= useLocation()
    console.log(location);
    const noheaderfooter=location.pathname.includes('login')||location.pathname.includes('signup')
    return (
        <div>
            {noheaderfooter||<Navbar></Navbar>}
            <Outlet></Outlet>
            { noheaderfooter ||<Footer></Footer>}
        </div>
    );
};

export default Main;