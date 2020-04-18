import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import { AboutMe } from './AboutCSS';
import AboutTable from './AboutTable';
import { elementDir } from '../../RouteDirections';

// import SVG
import { Cyb, Photo, Web } from '../../../Icons';

const About = ({ index, update_Subpage_Id, routes, animationDirection }) => {

  const [tableId, setTableId] = useState(routes.about); // read from redux


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
  console.log(animationDirection)

  return (
    <div style={{ background: "lightgreen"}}>
    <AboutMe i={index===1 ? 1 : 0}>
      <div className="about__content" >

        <div className="about__content--top">
          
          <Spring
            delay={350}
            config={generalAnimation}
            from={{ transform: index===1 ? elementDir(animationDirection) : "translate(0px, 0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translate(0px, 0px)" : elementDir(animationDirection), opacity: index===1 ? "1" : "0" }}
          >
            {props => <h1 className="header" style={props}>About</h1>}
          </Spring>

          <Spring
            delay={350}
            config={generalAnimation}
            from={{ transform: index===1 ? elementDir(animationDirection) : "translate(0px, 0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translate(0px, 0px)" : elementDir(animationDirection), opacity: index===1 ? "1" : "0" }}
          >
            {props => 
            <div className="paragraph" style={props}>
              <p>I'm an IT passionate, independent coder and photography hobbyist<i>Klauza ltd.</i></p>
              <p>I offer services to improve your business.</p>
            </div>}
          </Spring>

          <Spring
            delay={350}
            config={generalAnimation}
            from={{ transform: index===1 ? elementDir(animationDirection) : "translate(0px, 0px)", opacity: index===1 ? "0" : "1"  }}
            to={{ transform: index===1 ? "translate(0px, 0px)" : elementDir(animationDirection), opacity: index===1 ? "1" : "0" }}
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
          from={{ transform: index===1 ? elementDir(animationDirection) : "translate(0px, 0px)", opacity: index===1 ? "0" : "1"  }}
          to={{ transform: index===1 ? "translate(0px, 0px)" : elementDir(animationDirection), opacity: index===1 ? "1" : "0" }}
        >
          {props => <div style={props} className="about__content--bottom">
            <AboutTable tableId={tableId} setTableId={setTableId} routes={routes} update_Subpage_Id={update_Subpage_Id} />
          </div>}
        </Spring>

      </div>

    </AboutMe>
    </div>

  )  

}

export default About