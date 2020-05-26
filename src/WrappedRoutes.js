import React, {useEffect} from 'react';
import Routes from './Routes';
import Swipe from 'react-easy-swipe';
import history from './history';

// redux
import { connect } from 'react-redux';
import { updt_animation_direction } from './actions/routesActions';

const WrappedRoutes = ({ updateFirstStart, appFirstStart, loc1, loc2, location, updt_animation_direction, updateState }) => {

  const [swipePrevent, setSwipePrevent] = React.useState(false);
  
  useEffect(()=>{
    // document.addEventListener("keydown", handlePCSwipe)
    // document.addEventListener("keyup", handlePCSwipeOff)
  }, [])
  
  const onSwipeMove = (position, event) => {

    // excluding parts of website we don't want to interfere with while sliding/animating a route
    if (event.target.classList.contains('swiper-slide')){
      // console.log('break');
      return
    };
    if (event.target.classList.contains('prevent_page_swing')){
      // console.log('break');
      return
    };

    if(!swipePrevent){
      console.log(loc1)
      if(position.x < -75  && loc1 !== 3){
        // going left
        updt_animation_direction("to_left")

        if(loc1 === 0){
          blockFromSwipe();
          history.push({
            pathname: '/primo',
            state: 1
          })
        }
  
        if(loc1 === 1){
          blockFromSwipe();
          history.push({
            pathname: '/secundo',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/tertio',
            state: 3
          })
        }
        
  
        
        
      } else 
      if(position.x > 75 && loc1 !== 0){

        // going right
        updt_animation_direction("to_right")

        if(loc1 === 3){
          blockFromSwipe();
          history.push({
            pathname: '/secundo',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/primo',
            state: 1
          })
        }
        if(loc1 === 1){
          blockFromSwipe();
          history.push({
            pathname: '/',
            state: 0
          })
        }
      }

    } else {
      return
    }
  }

    // BLOCK FROM SWIPE
    const blockFromSwipe = () => {
      // block
      setSwipePrevent(true);
  
      // remove block after 750ms
      setTimeout(()=>{
        setSwipePrevent(false);
      }, 750)
    }

    
    // const handlePCSwipeOff = () => {
    //   document.getElementsByTagName("body")[0].style.cursor="default";
    // }
    // const handlePCSwipe = (e) => {
    //   if(e.which === 18) document.getElementsByTagName("body")[0].style.cursor="grab";
    // }

  return (
    
    <Swipe onSwipeMove={onSwipeMove}>
      <Routes updateFirstStart={updateFirstStart} appFirstStart={appFirstStart} loc1={loc1} loc2={loc2} location={location} />
    </Swipe>

  )
}


export default connect(null, {updt_animation_direction})(WrappedRoutes)
