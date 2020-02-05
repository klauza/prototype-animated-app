import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import NotFound from './components/NotFound/NotFound';

// pages
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

const Routes = ({loc1, loc2, location }) => {

  
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: `translate(${loc1 > loc2 ? "100%" : "-100%"}, 0)` },
    enter: { opacity: 1, transform: `translate(0%, 0)` },
    leave: { opacity: 0, transform: `translate(${loc1 > loc2 ? "-100%" : "100%"}, 0)` }
  });

  return (<>
    {transitions.map(({item, props, key}) => (
      <animated.div key={key} style={props}>
        <Switch location={item}>
          <Route exact path="/" component={Home} />
          <Route exact path="/page-one" component={PageOne} />
          <Route exact path="/page-two" component={PageTwo} />
          <Route exact path="/page-three" component={PageThree} />

          <Route component={NotFound} />
        </Switch>
      </animated.div>
    ))}
    </>
  )
}

export default Routes
