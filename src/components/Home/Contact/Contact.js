import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { ContactMe } from './ContactCSS';

const Contact = ({ index }) => {

  const generalAnimation = config.stiff;


  return (
    <ContactMe i={index===2 ? 1 : 0}>

      <Spring
        config={generalAnimation}
        delay={250}
        from={{ transform: index===2 ? "translateY(-100px)" : "translateY(0px)", opacity: index===2 ? "0" : "1"  }}
        to={{ transform: index===2 ? "translateY(0px)" : "translateY(-100px)", opacity: index===2 ? "1" : "0" }}
      >
        {props => 
          <div style={props}>
            <span>CONTACT PAGE</span>
          </div>
        }
      </Spring>
    </ContactMe>
  )
}

export default Contact
