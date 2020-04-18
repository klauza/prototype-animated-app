import React from 'react';
// import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { ContactMe } from './ContactCSS';

import { elementDir } from '../../RouteDirections';

const Contact = ({ routes, animationDirection }) => {

  const generalAnimation = config.stiff;


  return (
    <ContactMe>

      <Spring
        config={generalAnimation}
        delay={450}
        from={{ transform: elementDir(animationDirection), opacity: "0" }}
        to={{ transform: "translate(0px, 0px)", opacity: "1" }}
      >
        {props => 
          <div style={props}>
            <span>CONTACT PAGE</span>
            <span>CONTACT PAGE</span>
            <span>CONTACT PAGE</span>
          </div>
        }
      </Spring>
    </ContactMe>
  )
}

export default Contact
