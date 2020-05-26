import React, {useState} from 'react';
import MetaTags from '../../meta-tags';

import styled from 'styled-components';
import { AbsoluteWrapper } from '../reusable';
import Swipe from 'react-easy-swipe';
import { isMobile } from 'react-device-detect';

import { useTransition, animated } from 'react-spring'
// import { isMobile } from 'react-device-detect';
import { routeDir } from '../RouteDirections';

// redux
import { connect } from 'react-redux';
import { update_Subpage_Id, updt_animation_direction } from '../../actions/routesActions';

// index pages
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';

// CSS
import { ExternalWrapper } from './HomeCSS';


const VerticalComponent = styled(animated.div)`
  width: 100%; height: 100%;
  position: absolute; bottom: 0; top:0;
`;

const Home = ({update_Subpage_Id, updt_animation_direction, general: {routes, animationDirection}}) => {
  // meta-tags
  const metaData = {
    title: 'Proto Home',
    description: "Home of proto-folio, welcome!",
    keywords: "proto, folio, webpage, service, business, google, google maps",
    robots: "home, index, proto, folio",
    canonicalUrl: window.location.origin
  };

  const [index, setIndex] = useState(routes.home);  // read index from Redux
  const [blockSwipe, setBlockSwipe] = useState(false);

  // PC SWIPE/mouse-SCROLL
  // need those params if imported: updt_animation_direction, setIndex, update_Subpage_Id, blockFromSwipe
  const handleScroll = (e) => {
    if(!blockSwipe){

      let direction;

      // detect if firefox
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        direction = -e.deltaY;
      } else{
        direction = e.nativeEvent.wheelDelta;
      }
   
    
      if(direction < 0 && index < 2){
        updt_animation_direction('to_up');   // update direction
        
        blockFromSwipe();   // temp prevent from scroll

        setIndex(prevState => prevState+1);   // page ID

        update_Subpage_Id({...routes, home: index+1});    // set current page
      }

      if(direction > 0 && index > 0){
        updt_animation_direction('to_down');
        
        blockFromSwipe(); 
        
        setIndex(prevState => prevState-1);

        update_Subpage_Id({...routes, home: index-1});
      }

    } else{
      return;
    }
  }

  // MOBILE SWIPE
  const onSwipeMove = (position, event) => {
    if(!blockSwipe){

      if(position.y < -75 && index < 2){
        updt_animation_direction('to_up');
        
        // blockFromSwipe(); 
        setBlockSwipe(true);

        setIndex(prevState => prevState+1);

        update_Subpage_Id({...routes, home: index+1});
      }
      
      if(position.y > 75 && index > 0){
        updt_animation_direction('to_down'); 
        
        // blockFromSwipe(); 
        setBlockSwipe(true);
        
        setIndex(prevState => prevState-1);

        update_Subpage_Id({...routes, home: index-1});
      }
    } else{
      return;
    }
  }

  // TEMPORARY PREVENT FROM SCROLL
  const blockFromSwipe = () => {
    // block
    setBlockSwipe(true);

    // remove block after 1s
    setTimeout(()=>{
      setBlockSwipe(false);
    }, 750)
  }

  const sections = [
    {
      section: <Hero isMobile={isMobile} index={index} animationDirection={animationDirection} routes={routes} />,
      id: 0
    }, 
    {
      section: <About 
              isMobile={isMobile}
              animationDirection={animationDirection}
              update_Subpage_Id={update_Subpage_Id}
              routes={routes}
              index={index} />,
      id: 1
    }, 
    {
      section: <Contact isMobile={isMobile} index={index} animationDirection={animationDirection} routes={routes} />,
      id: 2
    }
  ];
  


  const sectionsTransitions = useTransition(sections[index], sec => sec.id, {
    from: {opacity: 0, transform: routeDir(animationDirection) },
    enter: {opacity: 1, transform: "translate(0px, 0px)" },
    leave: {opacity: 0, transform: routeDir(animationDirection, true) }
  })


  return (
    <>
    <MetaTags metaData={metaData} />
    <AbsoluteWrapper>

      <Swipe onSwipeMove={onSwipeMove} onSwipeEnd={()=>{setBlockSwipe(false)}}>
        <ExternalWrapper onWheel={(e)=>handleScroll(e)}>

          <div style={{position: "reltaive", width: "100%", height: "100vh"}}>
          {
          sectionsTransitions.map(({ item, props, key }) => { 
            return <VerticalComponent style={props} key={key} >{item.section}</VerticalComponent>
          })
          }
          </div>

        </ExternalWrapper>
      </Swipe>
      
    </AbsoluteWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_Subpage_Id, updt_animation_direction})(Home)
