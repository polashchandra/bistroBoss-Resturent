
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Callus from './Callus';
import Cardsweper from './Cardsweper';
import Divsection from './Divsection';
import Featured from './Featured';
import Populermanu from './Fooditem/Populermanu';
import Recomanded from './Recomanded';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BistroBOSS | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Cardsweper></Cardsweper>
            <Divsection></Divsection>
            <Populermanu></Populermanu>
            <Callus></Callus>
            <Recomanded></Recomanded>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;