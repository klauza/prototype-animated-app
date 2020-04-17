import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';

// pages
import Home from './components/Home/Home';
import WebDev from './components/WebDev';
import PhotographyDesign from './components/PhotographyDesign';
import Cybersecurity from './components/Cybersecurity';
import Vision from './components/Vision';
import Information from './components/Information';

// not found
import NotFound from './components/NotFound/NotFound';


const Routes = ({updateFirstStart, appFirstStart, loc1, loc2, location }) => {

  React.useEffect(()=>{
    updateFirstStart();
    //eslint-disable-next-line
  }, [])

  const transitions = useTransition(location, location => location.pathname, {
    config: { tension: 280, friction: 60 },
    from: { opacity: 0, transform: `translate(${appFirstStart ? "0%, 0%" : loc1 > loc2 ? "100%, 0%" : "-100%, 0%"})` },
    enter: { opacity: 1, transform: `translate(0%, 0%)` },
    leave: { opacity: 0, transform: `translate(${loc1 > loc2 ? "-100%" : "100%"}, 0%)` }
  });

  return (<>
    {transitions.map(({item, props, key}) => (
      <animated.div key={key} style={props}>
        <Switch location={item}>
          <Route exact path="/" component={Home} />
          <Route exact path="/web-development" component={WebDev} />
          <Route exact path="/photography-design" component={PhotographyDesign} />
          <Route exact path="/security" component={Cybersecurity} />
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
