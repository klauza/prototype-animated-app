import React, { useContext, useState } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import history from './history';
import { __RouterContext } from 'react-router-dom';
import Swipe from 'react-easy-swipe';

// pages
import WrappedRoutes from './WrappedRoutes';
// nav
import Navbar from './components/Navigation/Navbar';
// footer
// import Footer from './components/Footer/Footer';


function App() {
  const { location } = useContext(__RouterContext);

  const [appFirstStart, setAppFirstStart] = useState(true);
  const [loc1, setLoc1] = useState(location.state);
  const [loc2, setLoc2] = useState(loc1);

  const [swipePrevent, setSwipePrevent] = useState(false);

  const updateState = function(){
    // update route direction
    // redux function()

    setLoc1(location.state);
    setLoc2(loc1);
  }

  const enterState = function(){
    console.log('fire enter state')
    if(location.pathname === '/'){
      setLoc1(0);
    }
    if(location.pathname === '/web-development'){
      setLoc1(1);
    }
    if(location.pathname === '/photography-design'){
      setLoc1(2);
    }
    if(location.pathname === '/security'){
      setLoc1(3);
    }
  }

  // fires every time route gets updated
  React.useMemo(()=>{
    !appFirstStart && updateState();

    //eslint-disable-next-line
  }, [location]);

  // fires once on page load
  React.useMemo(()=>{
    enterState();
    //eslint-disable-next-line
  }, []);

  const updateFirstStart = () => {
    setAppFirstStart(false);
  }

  // console.log("current page ID: ",loc1);

  const onSwipeMove = (position, event) => {

    // excluding parts of website we don't want to interfere with while sliding/animating a route
    if (event.target.classList.contains('swiper-slide')){
      console.log('break');
      return
    };

    //

    if(!swipePrevent){

      if(position.x < -75){

        if(loc1 === 0){
          blockFromSwipe();
          history.push({
            pathname: '/web-development',
            state: 1
          })
        }
  
        if(loc1 === 1){
          blockFromSwipe();
          history.push({
            pathname: '/photography-design',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/security',
            state: 3
          })
        }
        
  
        
        
      } else 
      if(position.x > 75){

        if(loc1 === 3){
          blockFromSwipe();
          history.push({
            pathname: '/photography-design',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/web-development',
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


  // console.log('loc1: ', loc1, 'loc2: ', loc2);


  return (
    <Provider store={store}>
   
      {/* <Navbar /> */}

      
        <Swipe onSwipeMove={onSwipeMove}>
          <WrappedRoutes updateFirstStart={updateFirstStart} appFirstStart={appFirstStart} loc1={loc1} loc2={loc2} location={location} />
        </Swipe>
      
      {/* <Footer /> */}

    </Provider>
  );
}

export default App;
