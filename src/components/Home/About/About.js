import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
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
      content: <h1>About</h1>, 
      class: "header"
    }, 

    {
      content: 
        <div>
          <p>I'm an independent coder, photography hobbyist and IT passionate {'</>'} <i>Klauza ltd.</i></p>
          <p>I offer services to improve your business.</p>
        </div>, 
      class: "paragraph"
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