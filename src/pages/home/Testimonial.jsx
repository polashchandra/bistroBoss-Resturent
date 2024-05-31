import React, { useEffect, useState } from 'react';
import Subtile from '../../component/Subtile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
  const [newdata, setdata] = useState([])
  useEffect(() => {
    fetch('reviwe.json')
      .then(res => res.json())
      .then(data => setdata(data))
  }, [])
  return (

    <div>
      <Subtile Subtittle="---What Our Clients Say---" tittle="TESTIMONIALS"></Subtile>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          newdata.map(item => <SwiperSlide
            key={item._id}
          >
            <div className='my-16 mx-24 flex flex-col items-center'>
              <Rating
                style={{ maxWidth: 300 }}
                value={item.rating}
                items={4}
                highlightOnlySelected
                spaceBetween="medium"
                transition="zoom"
              />
              
              <FontAwesomeIcon className="text-9xl  " icon={faQuoteLeft} flip style={{color: "#e55252",}} />
             <p className='text-justify'> {item.details}</p>
              <h1 className='text-amber-500 text-2xl'>{item.name}</h1>
            </div>
          </SwiperSlide>)
        }
      </Swiper>

    </div>
  );
};

export default Testimonial;