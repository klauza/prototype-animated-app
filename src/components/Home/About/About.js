import React from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring';
import {Spring} from 'react-spring/renderprops'
import { AboutMe } from './AboutCSS';

const About = ({index, propsAbout, openModalForm}) => {

  // const config = { mass: 5, tension: 2000, friction: 200 }

  // const { size, opacity, ...rest } = useSpring({
  //   ref: springRef,
  //   config: config.stiff,
  //   from: { size: '20%', background: 'hotpink' },
  //   to: { size: isOpen ? '100%' : '20%', background: isOpen ? 'white' : 'hotpink' }
  // })


  console.log('index: ', index)
  // console.log('About open?: ', isOpen)
  const animateChildren = useSpring({
    // config,
    // config: { duration: 1750 },
    transform: index===1 ? "translateY(50px)" : "translateY(0px)",
    opacity: index===1 ? "1" : "0"
  })


    return (
      <div style={{background: 'purple'}}>

        <AboutMe style={propsAbout} i={index===1 && true}>
          <animated.div style={animateChildren} className="about-animated" >
            <animated.div className="block-1">I am ready for new challenges</animated.div>
            <animated.div className="block-2">My motivation and current goals</animated.div>
            <animated.button onClick={openModalForm}>Ask me anything</animated.button>
            <h1>Technology</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita? Ut id unde dicta, inventore voluptatibus dolor ea, suscipit voluptate rem ab aut molestias molestiae.</p>
            <h1>Motivation</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero beatae sed similique, possimus omnis earum necessitatibus voluptatibus eum quas!</p>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae error voluptatum laudantium officiis possimus numquam dolorem esse? Nobis, libero?</p>
          </animated.div>

          <Spring
            delay={300}
            from={{ number: index===1 ? 0 : 1  }}
            to={{ number: index===1 ? 1 : 0 }}>
            {props => <div>{props.number}</div>}
          </Spring>

        </AboutMe>

      </div>
    )  

}

export default About
