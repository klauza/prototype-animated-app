import React from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring'

const Hero = ({props, propsOpacity, toggleOpen}) => {
  return (
    <>
      <animated.div className="body-top" style={props}>

        <animated.div className="body-top__developer" style={propsOpacity}>
            <p>KLAUZA</p>
            <p>Portfolio</p>
            <p>Web Developer</p>
        </animated.div>

        <animated.div className="body-top__SVG" style={propsOpacity}>
          SVG
          <span>15vh</span> <button onClick={toggleOpen}>Squash</button>
        </animated.div>

      </animated.div>
    </>
  )
}

export default Hero
