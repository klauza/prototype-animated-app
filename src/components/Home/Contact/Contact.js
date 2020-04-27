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

              <form action="POST" data-netlify="true">
                <input type="text" name="name" id="name" placeholder="Name" />

                <input type="email" name="emai" id="email" placeholder="Email" />

                <textarea name="message" id="message" rows="7"></textarea>
              
                <input type="file" name="myfile" id="myfile" placeholder="Upload file" rows="7" />
                
                <div data-netlify-recaptcha="true"></div>
                <ul className="actions">
                  <li><input type="submit" value="Send message" class="button primary" /></li>
                </ul>
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
