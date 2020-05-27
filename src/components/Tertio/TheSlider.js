import React from 'react';
import Swiper from 'react-id-swiper';
import { SmileIcon, SadIcon } from '../../media';
 
const Navigation = ({funny, text}) => {

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
    <h1>{text}</h1>
    
    <Swiper {...params} className="swiper-prevent">
      <div><h1 className="swiper-prevent">1</h1><img className="swiper-prevent" src={funny ? SmileIcon : SadIcon} alt="" /></div>
      <div><h1 className="swiper-prevent" >2</h1><img  className="swiper-prevent" src={funny ? SmileIcon : SadIcon} alt="" /></div>
      <div><h1 className="swiper-prevent" >3</h1><img  className="swiper-prevent" src={funny ? SmileIcon : SadIcon} alt="" /></div>
      <div><h1 className="swiper-prevent" >4</h1><img  className="swiper-prevent" src={funny ? SmileIcon : SadIcon} alt="" /></div>
      <div><h1 className="swiper-prevent" >5</h1><img  className="swiper-prevent" src={funny ? SmileIcon : SadIcon} alt="" /></div>
    </Swiper>

  </>
  )
};
export default Navigation;