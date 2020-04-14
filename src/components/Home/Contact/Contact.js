import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ContactMe } from './ContactCSS';

const Contact = ({props, index, propsContact}) => {

  const animateChildren = useSpring({
    transform: index===2 ? "translateY(50px)" : "translateY(0px)",
    opacity: index===2 ? "1" : "0"
  })

  return (
    <div style={{background: 'lightgreen'}}>
      <ContactMe style={propsContact} i={index===2 ? 1 : 0}>
        <animated.div style={animateChildren}>
          <span>CONTACT PAGE</span>
        </animated.div>
      </ContactMe>
    </div>
  )
}

export default Contact
