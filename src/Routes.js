import React from 'react'
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line
import { config, useTransition, animated } from 'react-spring';

// pages
import Home from './components/Home';
import Primo from './components/Primo';
import PhotographyDesign from './components/Primo';
import Cybersecurity from './components/Cybersecurity';
import Vision from './components/Vision';
import Information from './components/Information';

// not found
import NotFound from './components/NotFound/NotFound';


const Routes = ({updateFirstStart, appFirstStart, loc1, loc2, location}) => {

  React.useEffect(()=>{
    updateFirstStart();
    //eslint-disable-next-line
  }, [])

  // GET ANIMATION DIRECTION FUNCTION IN USE HERE 
  const transitions = useTransition(location, location => location.pathname, {
    // config: { tension: 280, friction: 60 },
    from: { opacity: 0, transform: `translate(${appFirstStart ? "0%, 0%" : loc1 > loc2 ? "100%, 0%" : "-100%, 0%"})` },
    enter: { opacity: 1, transform: `translate(0%, 0%)` },
    leave: { opacity: 0, transform: `translate(${loc1 > loc2 ? "-100%" : "100%"}, 0%)` }
  });

  // const transitions = useTransition(location, location => location.pathname, {
  //   config: { tension: 280, friction: 60 },
  //   from: { opacity: 0, transform: routeDir(animationDirection) },
  //   enter: { opacity: 1, transform: `translate(0%, 0%)` },
  //   leave: { opacity: 0, transform: routeDir(animationDirection, true) }
  // });

  return (<>
    {transitions.map(({item, props, key}) => (
      <animated.div key={key} style={props}>
        <Switch location={item}>
          <Route exact path="/" component={Home} />
          <Route exact path="/primo" component={Primo} />
          <Route exact path="/secundo" component={PhotographyDesign} />
          <Route exact path="/tertio" component={Cybersecurity} />
          <Route exact path="/vision" component={Vision} />
          <Route exact path="/information" component={Information} />

          <Route component={NotFound} />
        </Switch>
      </animated.div>
    ))}
    </>
  )
}


export default Routes