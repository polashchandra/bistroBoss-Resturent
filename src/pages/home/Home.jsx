
import Banner from './Banner';
import Cardsweper from './Cardsweper';
import Divsection from './Divsection';
import Populermanu from './Fooditem/Populermanu';
import Recomanded from './Recomanded';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cardsweper></Cardsweper>
            <Divsection></Divsection>
            <Populermanu></Populermanu>
            <Recomanded></Recomanded>
        </div>
    );
};

export default Home;