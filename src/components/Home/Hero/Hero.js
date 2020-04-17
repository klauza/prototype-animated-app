import React, { useState } from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { Wrapper } from './HeroCSS';

const Hero = ({index, propsHero, toggleOpen}) => {



  const generalAnimation = config.stiff;

  return (
    <div style={{background: 'grey'}}>
      <Wrapper style={propsHero} i={index===0 ? 1 : 0}>
        <div className="body-top" >

          <Spring
            config={generalAnimation}
            delay={250}
            from={{ transform: index===0 ? "translateX(-50px)" : "translateX(0px)", opacity: index===0 ? "0" : "1"  }}
            to={{ transform: index===0 ? "translateX(0px)" : "translateX(-50px)", opacity: index===0 ? "1" : "0" }}
          >
            {props => 
              <div className="body-top__developer" style={props}>
                <p>SUCCESSFULL BUSINESS</p>
                <p>Whether you already have or want</p>
                <p>work with me</p>
              </div>
            }
          </Spring>


          <Spring
            delay={250}
            config={generalAnimation}
            from={{ transform: index===0 ? "translateX(50px)" : "translateX(0px)", opacity: index===0 ? "0" : "1"  }}
            to={{ transform: index===0 ? "translateX(0px)" : "translateX(50px)", opacity: index===0 ? "1" : "0" }}
          >
            {props =>
              <div className="body-top__SVG" style={props}>
                <div>
                  <span>SVG 15vh</span> <button onClick={toggleOpen}>Squash</button>
                </div>
              </div>
            }
          </Spring>

        </div>
      </Wrapper>
    </div>
  )
}

export default Hero
