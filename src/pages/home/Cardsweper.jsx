import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import photo1 from '../../assets/assets/home/slide1.jpg';
import img2 from '../../assets/assets/home/slide2.jpg';
import img3 from '../../assets/assets/home/slide3.jpg';
import img4 from '../../assets/assets/home/slide4.jpg';
import img5 from '../../assets/assets/home/slide5.jpg';
import Subtile from '../../component/Subtile';


const Cardsweper = () => {
    return (
        <div>
            <section>
                <Subtile
                Subtittle={"---From 11:00am to 10:00pm---"}
                tittle={"ORDER ONLINE"}
                ></Subtile>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide className='items-center'>
                        <img src={photo1} alt="Slide 1" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 pb-4 uppercase  text-white'>Salad</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="Slide 2" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 uppercase  text-white'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="Slide 3" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 uppercase  text-white'>Pizza</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="Slide 4" />
                        <h2 className='text-4xl mx-auto pl-16 -mt-20 uppercase  text-white'>desserts</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="Slide 5" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 uppercase  text-white'>Salad</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="Slide 2" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 uppercase  text-white'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="Slide 3" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 uppercase  text-white'>Pizza</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="Slide 5" />
                        <h2 className='text-4xl mx-auto pl-20 -mt-20 uppercase  text-white'>Salad</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="Slide 4" />
                        <h2 className='text-4xl mx-auto pl-16 -mt-20 uppercase  text-white'>desserts</h2>
                    </SwiperSlide>
                </Swiper>
            </section>

        </div>
    );
};

export default Cardsweper;
