import React from 'react'
import { useTransition, animated } from 'react-spring';

// import SVG
import { Cyb, Photo, Web } from '../../../Icons';

const AboutSVGs = ({ lockAnimation, tableId }) => {

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
