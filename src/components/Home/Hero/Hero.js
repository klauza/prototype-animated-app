import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { Wrapper } from './HeroCSS';

import { elementDir } from '../../RouteDirections';

const Hero = ({ routes, animationDirection }) => {


  const generalAnimation = config.stiff;

  return (
    <Wrapper>
      <div className="body-top" >

        <Spring
          config={generalAnimation}
          delay={250}
          from={{ transform: elementDir(animationDirection), opacity: "0"  }}
          to={{ transform: "translate(0px, 0px)", opacity:"1"}}
        >
          {props => 
            <div className="body-top__developer" style={props}>
              <p>SUCCESSFULL BUSINESS</p>
              <p>Whether you already have or want</p>
              <p>work with me</p>
              <NavLink exact to={{pathname: "/information", state: -1}}>Information</NavLink>
              <NavLink exact to={{pathname: "/vision", state: -2}}>Vision</NavLink>
            </div>
          }
        </Spring>


        <Spring
          delay={250}
          config={generalAnimation}
          from={{ transform: elementDir(animationDirection), opacity: "0"  }}
          to={{ transform: "translate(0px, 0px)", opacity: "1" }}
        >
          {props =>
            <div className="body-top__SVG" style={props}>
              <div>
                SVG
              </div>
            </div>
          }
        </Spring>

      </div>
    </Wrapper>
  )
}

export default Hero
