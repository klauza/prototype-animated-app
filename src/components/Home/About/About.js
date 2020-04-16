import React, { useState } from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring';
import {Spring} from 'react-spring/renderprops'
import { Container, AboutMe } from './AboutCSS';
import ModalForm from './ModalForm';
import AboutTable from './AboutTable';

const About = ({ index, propsAbout }) => {

// const config = { mass: 5, tension: 2000, friction: 200 }

// const { size, opacity, ...rest } = useSpring({
//   ref: springRef,
//   config: config.stiff,
//   from: { size: '20%', background: 'hotpink' },
//   to: { size: isOpen ? '100%' : '20%', background: isOpen ? 'white' : 'hotpink' }
// })
const [modal, setModal] = useState(false);
const [tableId, setTableId] = useState(1);

const openModalForm = () => {
  // setModalDelay(true);
  setModal(!modal);
}

// console.log('index: ', index)
// console.log('About open?: ', isOpen)
const animateChildren = useSpring({
  // config,
  // config: { duration: 1750 },
  // transform: index===1 ? "translateY(50px)" : "translateY(0px)",
  opacity: index===1 ? "1" : "0"
})






return (
  <Container>
    <ModalForm modalOpen={modal}/>

    <AboutMe style={propsAbout} i={index===1 ? 1 : 0}>
      <animated.div style={animateChildren} className="about-animated" >

        <div className="top-part">
          <h1>About</h1>
          <div>
            <p>I'm an IT passionate, independent coder and open minded CEO of <i>Klauza ltd.</i></p>
            <p>I offer services which lead to business improvements.</p>
            <animated.button onClick={openModalForm}>Ask me anything</animated.button>
          </div>
          <div>
            <span>SVG</span>
          </div>
        </div>
        
        <div className="bot-part">
          <AboutTable tableId={tableId} setTableId={setTableId} />
        </div>

      </animated.div>

      <Spring
        delay={300}
        from={{ number: index===1 ? 0 : 1  }}
        to={{ number: index===1 ? 1 : 0 }}>
        {props => <div>{props.number}</div>}
      </Spring>

    </AboutMe>

  </Container>
)  

}

export default About
