import React from 'react'
import { useTransition, animated } from 'react-spring';

// import SVG
import { Confused, Sad, Smiley } from '../../../Icons';

const AboutSVGs = ({ lockAnimation, tableId }) => {

  const svgs = [
    {
      svg: <Smiley />,
      id: 0
    }, 
    {
      svg: <Sad />,
      id: 1
    }, 
    {
      svg: <Confused />,
      id: 2
    }
    ];

  const svgTransitions = useTransition(svgs[tableId], item=>item.id, {
    immediate: lockAnimation,
    from: {opacity: 0, transform: 'scale(0.9)'},
    enter: {opacity: 1, transform: 'scale(1)'},
    leave: {opacity: 0, transform: 'scale(0.9)'}
  })

  return (
    <div>
      {
      svgTransitions.map(({ item, props, key }) => { 
        return <animated.div style={props} key={key} >{item.svg}</animated.div>
        })
      }
    </div>
  )
}

export default AboutSVGs
