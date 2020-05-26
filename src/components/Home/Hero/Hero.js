import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Wrapper } from './HeroCSS';
import { Web } from '../../../Icons';


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
              <h1>I</h1>
            </div>
          }
        </Spring>

    </Wrapper>
  )
}

export default React.memo(Hero)
