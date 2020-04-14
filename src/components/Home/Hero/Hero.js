import React from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring'
import { Wrapper } from './HeroCSS';

const Hero = ({props, propsHero, toggleOpen}) => {
  return (
    <div style={{background: 'grey'}}>
      <Wrapper style={propsHero}>
        <animated.div className="body-top">

          <animated.div className="body-top__developer" 
          // style={propsHero}
          >
              <p>KLAUZA</p>
              <p>Portfolio</p>
              <p>Web Developer</p>
          </animated.div>

          <animated.div className="body-top__SVG" 
          // style={propsHero}
          >
            SVG
            <span>15vh</span> <button onClick={toggleOpen}>Squash</button>
          </animated.div>

        </animated.div>
      </Wrapper>
    </div>
  )
}

export default Hero
