import React, { useState } from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops'
import { Container, AboutMe } from './AboutCSS';
import ModalForm from './ModalForm';
import AboutTable from './AboutTable';

// import SVG
import { Cyb, Photo, Web } from '../../../Icons';

const About = ({ index, propsAbout }) => {

const [modal, setModal] = useState(false);
const [tableId, setTableId] = useState(1);

const openModalForm = () => {
  // setModalDelay(true);
  setModal(!modal);
}



const svgs = [<Cyb/>, <Photo/>, <Web/>];

const generalAnimation = config.stiff;

return (
  <Container>
    <ModalForm modalOpen={modal}/>

    <AboutMe style={propsAbout} i={index===1 ? 1 : 0}>
      <div className="about-animated" >

        <div className="top-part">
          
          <Spring
            delay={150}
            config={generalAnimation}
            from={{ transform: index===1 ? "translateY(-50px)" : "translateY(0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translateY(0px)" : "translateY(-50px)", opacity: index===1 ? "1" : "0" }}
          >
            {props => <h1 style={props}>About</h1>}
          </Spring>

          <Spring
            delay={250}
            config={generalAnimation}
            from={{ transform: index===1 ? "translateY(-50px)" : "translateY(0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translateY(0px)" : "translateY(-50px)", opacity: index===1 ? "1" : "0" }}
          >
            {props => <div style={props}>
              <p>I'm an IT passionate, independent coder and open minded CEO of <i>Klauza ltd.</i></p>
              <p>I offer services which lead to business improvements.</p>
              <animated.button onClick={openModalForm}>Ask me anything</animated.button>
            </div>}
          </Spring>

          <Spring
            delay={350}
            config={generalAnimation}
            from={{ transform: index===1 ? "translateX(25px)" : "translateX(0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translateX(0px)" : "translateX(25px)", opacity: index===1 ? "1" : "0" }}
          >
          {({transform, opacity}) => <div style={{transform, opacity}} className="svg-div">
            {svgs[tableId-1]}
          </div>}
          </Spring>

        </div>
        
        <Spring
          delay={400}
          config={generalAnimation}
          from={{ transform: index===1 ? "translateY(50px)" : "translateY(0px)", opacity: index===1 ? "0" : "1"  }}
          to={{ transform: index===1 ? "translateY(0px)" : "translateY(50px)", opacity: index===1 ? "1" : "0" }}
        >
          {props => <div style={props} className="bot-part">
            <AboutTable tableId={tableId} setTableId={setTableId} />
          </div>}
        </Spring>

      </div>

    </AboutMe>

  </Container>
)  

}

export default About
