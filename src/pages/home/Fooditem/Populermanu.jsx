
import Subtile from './../../../component/Subtile';
import Menuitem from '../../../sharefils/Menuitem';
import useMenu from '../../../component/custom/useMenu';

const Populermanu = () => {
    const [menu]=useMenu()
    const populer=menu.filter(item=>item.category==="popular")
    return (
        <section className='mb-12'>
            <Subtile
            Subtittle={"---Check it out---"}
            tittle={"FROM OUR MENU"}
            ></Subtile>
            <div className=' grid md:grid-cols-2 gap-10'>
                {
                    populer.map(item=><Menuitem 
                        key={item._id}
                        item={item}></Menuitem>)
                } 
            </div>
        </section>
    );
};

export default Populermanu;