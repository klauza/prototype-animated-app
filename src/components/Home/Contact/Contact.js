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

            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Your Role: <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <div data-netlify-recaptcha="true"></div>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
       

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
