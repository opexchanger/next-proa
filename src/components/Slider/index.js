import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider({ perView, space, centered, freemode, pagination, navigation, children }) {
  return (
    <Swiper
      slidesPerView={perView}
      spaceBetween={space}
      centeredSlides={centered}
      freeMode={freemode}
      pagination={pagination}
      navigation={navigation}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide width="300px" key={child.key}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}