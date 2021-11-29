import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Autoplay } from 'swiper';
// import { SlideImage, SwiperSlideContainer } from './Slider.styles';

import s from './Slider.module.css';

const Slider = ({ movies }) => {
  // const shortMoviesList = movies.slice(0, 10);

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 2,
        clickable: true,
      }}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      onSlideChange={() => console.log('slide change')}
    >
      {movies.map(({ id, poster, title, plot }) => (
        <SwiperSlide className={s.slideContainer}>
          <img className={s.sliderImage} key={id} src={poster} alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
