import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import Routes from './Routes';
// nav
import Navbar from './components/Navigation/Navbar';
// footer
import Footer from './components/Footer/Footer';
// notFound


// Swiping functionality
import SwipeMobile from './components/reusable/SwipeMobile';

function App() {
  const { location } = useContext(__RouterContext);

  const [loc1, setLoc1] = React.useState(location.state);
  const [loc2, setLoc2] = React.useState(loc1);

  const updateState = function(){
    setLoc1(location.state);
    setLoc2(loc1);
  }

  React.useMemo(()=>{
    updateState();
  }, [location])

  // console.log('loc1: ', loc1, 'loc2: ', loc2);

  // console.log(transitions);

  return (
    <React.Fragment>
   
      <Navbar />
      <SwipeMobile>

        <Routes loc1={loc1} loc2={loc2} location={location} />

      </SwipeMobile>
      
      <Footer />

    </React.Fragment>
  );
}

export default App;
