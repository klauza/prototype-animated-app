import React, {useEffect} from 'react';
import Routes from './Routes';
import Swipe from 'react-easy-swipe';
import history from './history';

// redux
import { connect } from 'react-redux';
import { updt_animation_direction } from './actions/routesActions';

const WrappedRoutes = ({ updateFirstStart, appFirstStart, loc1, loc2, location, updt_animation_direction, updateState, general: {tools} }) => {

  const [swipePrevent, setSwipePrevent] = React.useState(false);
  const [tempClick, setTempClick] = React.useState(null);
  
  useEffect(()=>{

      if(tools.pc_mouse_move){
        document.getElementsByTagName("body")[0].style.cursor="grab";
        document.getElementsByTagName("body")[0].style.userSelect="none";
      } else if(!tools.pc_mouse_move){
        document.getElementsByTagName("body")[0].style.cursor="default";
        document.getElementsByTagName("body")[0].style.userSelect="auto";
      }

  }, [tools.pc_mouse_move])
  
  
  const onSwipeMove = (position, event) => {
    // console.log(event.target);
    // excluding parts of website we don't want to interfere with while sliding/animating a route
    if (event.target.classList.contains('swiper-prevent')){
      // console.log('break');
      return
    };
    if (event.target.classList.contains('swiper-slide')){
      // console.log('break');
      return
    };
    if (event.target.classList.contains('prevent_page_swing')){
      // console.log('break');
      return
    };
    if (tempClick.contains('prevent_page_swing') || tempClick.contains('swiper-slide') || tempClick.contains('prevent_page_swing') ){
      // console.log('break');
      return
    };

    if(!swipePrevent){
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



    const updateTempClick = (e) => {
      // for drag prevent
      setTempClick(e.target.classList);
    }
    const removeTempClick = (e) => {
      setTempClick(null);
    }




    // console.log(tempClick)
  return (
    <Swipe 
      onSwipeMove={onSwipeMove} 
      allowMouseEvents={tools.pc_mouse_move && true} 
      onPointerDown={window.PointerEvent && updateTempClick}
      onPointerUp={window.PointerEvent && removeTempClick}
      // updateScroll={tools.pc_mouse_move && updateScroll}
    >
      <Routes updateFirstStart={updateFirstStart} appFirstStart={appFirstStart} loc1={loc1} loc2={loc2} location={location} />
    </Swipe>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {updt_animation_direction})(WrappedRoutes)
