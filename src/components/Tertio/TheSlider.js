import React from 'react';
import Swiper from 'react-id-swiper';

const Navigation = () => {

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination:{
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }

  return (
  <>
    <h1>Slider</h1>
    
    <Swiper {...params} className="swiper-parent">
      <div>Slide #1</div>
      <div>Slide #2</div>
      <div>Slide #3</div>
      <div>Slide #4</div>
      <div>Slide #5</div>
    </Swiper>

  </>
  )
};
export default Navigation;