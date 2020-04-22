import React, { useContext, useState } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { __RouterContext } from 'react-router-dom';

// pages
import WrappedRoutes from './WrappedRoutes';
// nav
import Navbar from './components/Navigation';
// footer
// import Footer from './components/Footer/Footer';


function App() {
  const { location } = useContext(__RouterContext);

  const [appFirstStart, setAppFirstStart] = useState(true);
  const [loc1, setLoc1] = useState(location.state);
  const [loc2, setLoc2] = useState(loc1);



  const updateState = function(){
    // update route direction
    // redux function()

    setLoc1(location.state);
    setLoc2(loc1);
  }

  const enterState = function(){
    // console.log('fire enter state');
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
    // console.log('next loc: ', loc1)
    // console.log('prev loc: ', loc2)

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



  


  return (
    <Provider store={store}>
   
      <Navbar loc1={loc1} loc2={loc2} />

      
        
      <WrappedRoutes updateState={updateState} updateFirstStart={updateFirstStart} appFirstStart={appFirstStart} loc1={loc1} loc2={loc2} location={location} />
      
      {/* <Footer /> */}

    </Provider>
  );
}

export default App;
