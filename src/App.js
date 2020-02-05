import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

// nav
import Navbar from './components/Navigation/Navbar';
// footer
import Footer from './components/Footer/Footer';
// notFound
import NotFound from './components/NotFound/NotFound';

// pages
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

// Swiping functionality
import SwipeMobile from './components/reusable/SwipeMobile';
function App() {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 1, transform: "translate(0, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 1, transform: "translate(0, 0)" }
  });

  return (
    <React.Fragment>
   
      <Navbar />
      <SwipeMobile>

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

      </SwipeMobile>
      
      <Footer />

    </React.Fragment>
  );
}

export default App;
