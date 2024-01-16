// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import batman from '../assets/productimages/batmanmckp.png';
import metallica from '../assets/productimages/metallicamckp.png';
import knicks from '../assets/productimages/knicksmckp.png';
import dog from '../assets/productimages/dogmckp.png';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className="slider-container">
        <h3 className="slide-title">Best-Sellers</h3>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={batman} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={metallica} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={knicks} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={dog} />
        </SwiperSlide>
      </Swiper>
    </div>  
    </>
  );
}