import React from 'react';
//eslint-disable-next-line
import { useSpring, animated } from 'react-spring';
import { AboutMe } from './AboutCSS';

const About = ({propsTwo, openModalForm}) => {
  return (
    <>
      <AboutMe>
        <animated.div style={propsTwo} className="block-1">I am ready for new challenges</animated.div>
        <animated.div style={propsTwo} className="block-2">My motivation and current goals</animated.div>
        <animated.button style={propsTwo} onClick={openModalForm}>Ask me anything</animated.button>
        <h1>Technology</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita? Ut id unde dicta, inventore voluptatibus dolor ea, suscipit voluptate rem ab aut molestias molestiae.</p>
        <h1>Motivation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero beatae sed similique, possimus omnis earum necessitatibus voluptatibus eum quas!</p>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae error voluptatum laudantium officiis possimus numquam dolorem esse? Nobis, libero?</p>
      </AboutMe>
    </>
  )
}

export default About
