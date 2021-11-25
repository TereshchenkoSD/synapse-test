import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination } from 'swiper';
import { SlideImage } from './Slider.styles';

import slide from '../../images/1.jpg';

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <SlideImage src={slide} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src={slide} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src={slide} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src={slide} alt="slide_image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
