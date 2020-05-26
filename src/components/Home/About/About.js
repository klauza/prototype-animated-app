import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { config } from 'react-spring/renderprops';
import { AboutMe } from './AboutCSS';
import AboutTable from './AboutTable';
import AboutSVGs from './AboutSVGs';


import { elementDir } from '../../RouteDirections';


const About = ({ isMobile, update_Subpage_Id, routes, animationDirection }) => {


  const [lockAnimation, setLockAnimation] = useState(true);
  const [tableId, setTableId] = useState(routes.about); // read from redux

  useEffect(()=>{
    setTimeout(()=>{setLockAnimation(false)}, 800)
  }, []);

  // const props = useSpring({transform: toggle && elementDir(animationDirection), opacity: toggle ? 1 : 0})


  const items = [
    {
      content: <h1>LOREM</h1>, 
      class: `header color-${tableId}`
    }, 

    {
      content: 
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta magni autem vel explicabo voluptatem quos, earum repellendus. Possimus, in eius!</p>
        </div>, 
      class: `paragraph color-${tableId}`
    }
    ,
    {
      content: <AboutSVGs lockAnimation={lockAnimation} tableId={tableId} />, 
      class: "svg"
    }

  ]

  const generalAnimation = config.stiff;

  const trail = useTrail(items.length, {
    immediate: isMobile ? true : false,
    generalAnimation,
    from: { opacity: 0, transform: elementDir(animationDirection) },
    to: {opacity: 1, transform: "translate(0px, 0px)"}
  })

  
  return (
    <div style={{ backgroundColor: "#fff"}}>
    <AboutMe>

      <div className="about__content" >
        <div className="about__content--top">
        
        {trail.map((props, index) => (
            <animated.div key={index} style={props} className={`${items[index].class}`}> {items[index].content} </animated.div>
        ))}

        </div>

        <div className="about__content--bottom" >
          <AboutTable lockAnimation={lockAnimation} isMobile={isMobile} tableId={tableId} setTableId={setTableId} routes={routes} update_Subpage_Id={update_Subpage_Id} />
        </div>
       
        
      </div>

    </AboutMe>
    </div>

  )  


}

export default React.memo(About)