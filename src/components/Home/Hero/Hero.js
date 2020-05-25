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

              <div className="hero__contaier--text">
                <h1>MAIN TITLE</h1>
                <p>Subtext Ut mauris metus, dignissim a nisi eu, egestas sollicitudin metus.</p>
                <p>2nd laneMauris eu malesuada felis.</p>
              </div>

              <div className="hero__contaier--image">
                <div>
                  <Web />
                </div>
              </div>

            </div>
          }
        </Spring>

    </Wrapper>
  )
}

export default React.memo(Hero)
