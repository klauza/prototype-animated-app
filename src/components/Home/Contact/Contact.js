import React from 'react';
// import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { ContactMe } from './ContactCSS';

import { elementDir } from '../../RouteDirections';

const Contact = ({ routes, animationDirection }) => {

  const generalAnimation = config.stiff;

  return (
    <div style={{ backgroundColor: "#fff"}}>
      <ContactMe>

        <Spring
          config={generalAnimation}
          delay={350}
          from={{ transform: elementDir(animationDirection), opacity: "0" }}
          to={{ transform: "translate(0px, 0px)", opacity: "1" }}
        >
          {props => 
          <>
            <div style={props}>
              <span>CONTACT PAGE</span>
              <span>CONTACT PAGE</span>
              <span>CONTACT PAGE</span>
            </div>
            <div className="test" style={props}>
              <span>Box</span>
            </div>
          </>
          }
        </Spring>


      </ContactMe>
    </div>
  )
}

export default React.memo(Contact)
