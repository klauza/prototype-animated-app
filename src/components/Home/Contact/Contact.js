import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { ContactMe } from './ContactCSS';

const Contact = ({ index, propsContact}) => {

  const generalAnimation = config.stiff;


  return (
    <div style={{background: 'lightgreen'}}>
      <ContactMe style={propsContact} i={index===2 ? 1 : 0}>

        <Spring
          config={generalAnimation}
          delay={250}
          from={{ transform: index===2 ? "translateX(-50px)" : "translateX(0px)", opacity: index===2 ? "0" : "1"  }}
          to={{ transform: index===2 ? "translateX(0px)" : "translateX(-50px)", opacity: index===2 ? "1" : "0" }}
        >
          {props => 
            <div style={props}>
              <span>CONTACT PAGE</span>
            </div>
          }
        </Spring>
      </ContactMe>
    </div>
  )
}

export default Contact
