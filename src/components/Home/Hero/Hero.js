import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Wrapper } from './HeroCSS';
import { Home } from '../../../Icons';


import { elementDir } from '../../RouteDirections';

const Hero = ({ animationDirection }) => {


  const generalAnimation = config.stiff;

  return (
    <Wrapper>
        <Spring
          config={generalAnimation}
          delay={250}
          from={{ transform: elementDir(animationDirection), opacity: 0  }}
          to={{ transform: "translate(0px, 0px)", opacity: 1}}
        >
          {props => 
            <div className="hero__contaier" style={props}>
              <Home />
            </div>
          }
        </Spring>

    </Wrapper>
  )
}

export default React.memo(Hero)
