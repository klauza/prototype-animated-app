import React, { useContext } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import history from './history';
import { __RouterContext } from 'react-router-dom';
import Swipe from 'react-easy-swipe';

// pages
import Routes from './Routes';
// nav
import Navbar from './components/Navigation/Navbar';
// footer
// import Footer from './components/Footer/Footer';


function App() {
  const { location } = useContext(__RouterContext);

  const [appFirstStart, setAppFirstStart] = React.useState(true);
  const [loc1, setLoc1] = React.useState(location.state);
  const [loc2, setLoc2] = React.useState(loc1);

  const [swipePrevent, setSwipePrevent] = React.useState(false);

  const updateState = function(){
    setLoc1(location.state);
    setLoc2(loc1);
  }

  const enterState = function(){
    if(location.pathname === '/'){
      setLoc1(0);
    }
    if(location.pathname === '/page-one'){
      setLoc1(1);
    }
    if(location.pathname === '/page-two'){
      setLoc1(2);
    }
    if(location.pathname === '/page-three'){
      setLoc1(3);
    }
  }

  React.useMemo(()=>{
    updateState();
    //eslint-disable-next-line
  }, [location])

  // fires once on page load
  React.useMemo(()=>{
    enterState();
    //eslint-disable-next-line
  }, [])

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
            pathname: '/page-one',
            state: 1
          })
        }
  
        if(loc1 === 1){
          blockFromSwipe();
          history.push({
            pathname: '/page-two',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/page-three',
            state: 3
          })
        }
        
  
        
        
      } else 
      if(position.x > 75){

        if(loc1 === 3){
          blockFromSwipe();
          history.push({
            pathname: '/page-two',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/page-one',
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
        <Routes updateFirstStart={updateFirstStart} appFirstStart={appFirstStart} loc1={loc1} loc2={loc2} location={location} />
      </Swipe>
      
      {/* <Footer /> */}

    </Provider>
  );
}

export default App;
