import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination } from 'swiper';

import slide from '../../images/1.jpg';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={slide} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="slide_image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
