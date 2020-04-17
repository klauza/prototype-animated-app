import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { Container, AboutMe } from './AboutCSS';
import AboutTable from './AboutTable';

// import SVG
import { Cyb, Photo, Web } from '../../../Icons';

const About = ({ index, propsAbout }) => {

const [tableId, setTableId] = useState(0);


const svgs = [
{
  svg: <Cyb/>,
  id: 0
}, 
{
  svg: <Photo/>,
  id: 1
}, 
{
  svg: <Web/>,
  id: 2
}
];

const svgTransitions = useTransition(svgs[tableId], item=>item.id, {
  from: {opacity: 0, transform: 'scale(0.9)'},
  enter: {opacity: 1, transform: 'scale(1)'},
  leave: {opacity: 0, transform: 'scale(0.9)'}
})


const generalAnimation = config.stiff;

return (
  <Container>

    <AboutMe style={propsAbout} i={index===1 ? 1 : 0}>
      <div className="about__content" >

        <div className="about__content--top">
          
          <Spring
            delay={150}
            config={generalAnimation}
            from={{ transform: index===1 ? "translateY(-50px)" : "translateY(0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translateY(0px)" : "translateY(-50px)", opacity: index===1 ? "1" : "0" }}
          >
            {props => <h1 className="header" style={props}>About</h1>}
          </Spring>

          <Spring
            delay={250}
            config={generalAnimation}
            from={{ transform: index===1 ? "translateY(-50px)" : "translateY(0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translateY(0px)" : "translateY(-50px)", opacity: index===1 ? "1" : "0" }}
          >
            {props => 
            <div className="paragraph" style={props}>
              <p>I'm an IT passionate, independent coder and open minded CEO of <i>Klauza ltd.</i></p>
              <p>I offer services to improve your business.</p>
            </div>}
          </Spring>

          <Spring
            delay={350}
            config={generalAnimation}
            from={{ transform: index===1 ? "translateX(25px)" : "translateX(0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translateX(0px)" : "translateX(25px)", opacity: index===1 ? "1" : "0" }}
          >
          {({transform, opacity}) => 
          <div style={{transform, opacity}} className="svg">
            {
             svgTransitions.map(({ item, props, key }) => { 
              return <animated.div style={props} key={key} >{item.svg}</animated.div>
              })
            }
          </div>}
          </Spring>

        </div>
        
        <Spring
          delay={400}
          config={generalAnimation}
          from={{ transform: index===1 ? "translateY(50px)" : "translateY(0px)", opacity: index===1 ? "0" : "1"  }}
          to={{ transform: index===1 ? "translateY(0px)" : "translateY(50px)", opacity: index===1 ? "1" : "0" }}
        >
          {props => <div style={props} className="about__content--bottom">
            <AboutTable tableId={tableId} setTableId={setTableId} />
          </div>}
        </Spring>

      </div>

    </AboutMe>

  </Container>
)  

}

export default About
