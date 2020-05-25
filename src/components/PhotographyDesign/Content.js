import React, { useEffect } from 'react';
import { AnimatedContent } from './GeneralCSS';
import { useTransition } from 'react-spring';

import WebDesign from './views/WebDesign';
import Photography from './views/Photography';
import Photoshop from './views/Photoshop';

const Content = ({ id, contentTopPosition }) => {

  // const contentTopPosition = useRef();

  useEffect(()=>{
    contentTopPosition.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    //eslint-disable-next-line
  }, [])

  const contents = [
    {
      name: <WebDesign />,
      id: 0
    }, 
    {
      name: <Photography/>,
      id: 1
    }, 
    {
      name: <Photoshop />,
      id: 2
    }
    ];

  const contentTransitions = useTransition(contents[id], item=>item.id, {
    // immediate: lockAnimation,
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  })

  return (
    <div ref={contentTopPosition} style={{height: "100%", marginBottom: "50px", position: "relative"}}>
        {
        contentTransitions.map(({ item, props, key }) => { 
          return <AnimatedContent style={props} key={key} >{item.name}</AnimatedContent>
          })
        }
    </div>
  )
}

export default Content
