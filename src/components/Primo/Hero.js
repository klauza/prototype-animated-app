import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Header, HeroMain } from './PrimoCSS';
import { elementDir } from '../RouteDirections';

const generalAnimation = config.stiff;

const Hero = ( {animationDirection} ) => {


  // const fadeIn = useSpring({
  //   from: {
  //     trail: 1000,
  //     opacity: 0,
  //     transform: "translateY(100px)"
  //   },
  //   to: {
  //     trail: 1000,
  //     opacity: 1,
  //     transform: "translateY(0px)"
  //   }
  // })
  return (
    <HeroMain>

      <Spring
        config={generalAnimation}
        delay={250}
        from={{ transform: elementDir(animationDirection), opacity: 0  }}
        to={{ transform: "translate(0px, 0px)", opacity: 1}}
      >
        {props => 
          <Header style={props}>
            <h1>I</h1>
          </Header>
        }
      </Spring>

    </HeroMain>
  )
}

export default Hero
