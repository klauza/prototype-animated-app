import React, {useState} from 'react';
import styled from 'styled-components';
import { AbsoluteWrapper } from '../reusable';
import Swipe from 'react-easy-swipe';
import { useTransition, useSpring, animated } from 'react-spring'
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
import { ExternalWrapper, AboutButton, ContactButton } from './HomeCSS';


const RenderingC = styled(animated.div)`
  width: 100%; height: 100%;
  // transform-origin: bottom;
  position: absolute; bottom: 0; top:0;
`;

const Home = ({update_Subpage_Id, updt_animation_direction, general: {routes, animationDirection}}) => {

  
  const [open, setOpen] = useState(true);

  const [index, setIndex] = useState(routes.home);  // read index from Redux
  const [blockSwipe, setBlockSwipe] = useState(false);
  

  // const toggleOpen = () => {
  //   setOpen(!open);

  //   setTimeout(()=>{
  //     // setSecondOpen(!secondOpen);
  //   }, 500)
  // }


  // PC SWIPE/mouse-SCROLL
  const handleScroll = (e) => {
    let direction;

    // detect if firefox
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
      direction = -e.deltaY;
    } else{
      direction = e.nativeEvent.wheelDelta;
    }
   
    if(!blockSwipe){
      if(direction < 0 && index < 2){
        updt_animation_direction('down');   // update direction
        
        blockFromSwipe();   // temp prevent from scroll

        setIndex(prevState => prevState+1);   // page ID

        update_Subpage_Id({...routes, home: index+1});    // set current page
      }

      if(direction > 0 && index > 0){
        updt_animation_direction('up');
        
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
        updt_animation_direction('down');
        
        blockFromSwipe(); 

        setIndex(prevState => prevState+1);

        update_Subpage_Id({...routes, home: index+1});
      }
      
      if(position.y > 75 && index > 0){
        updt_animation_direction('up'); 
        
        blockFromSwipe(); 
        
        setIndex(prevState => prevState-1);

        update_Subpage_Id({...routes, home: index-1});
      }
    } else{
      return;
    }
  }

  // TEMPORARY PREVENT FROM SCROLL/SWIPE
  const blockFromSwipe = () => {
    // block
    setBlockSwipe(true);

    // remove block after 1s
    setTimeout(()=>{
      setBlockSwipe(false);
    }, 1000)
  }

  const HomeSections = [
    {
      section: <Hero index={index} />,
      id: 0
    }, 
    {
      section: <About 
              animationDirection={animationDirection}
              update_Subpage_Id={update_Subpage_Id}
              routes={routes}
              animationDirection={animationDirection}
              index={index} />,
      id: 1
    }, 
    {
      section: <Contact index={index} />,
      id: 2
    }
  ];
  


  const sectionsTransitions = useTransition(HomeSections[index], sec => sec.id, {
    from: {opacity: 0, transform: routeDir(animationDirection) },
    enter: {opacity: 1, transform: "translate(0px, 0px)" },
    leave: {opacity: 0, transform: routeDir(animationDirection, true) }
  })


  return (
    <AbsoluteWrapper>

  
      
      <Swipe onSwipeMove={onSwipeMove}>
        <ExternalWrapper onWheel={(e)=>handleScroll(e)}>

          <div style={{position: "reltaive", width: "100%", height: "100vh"}}>
          {
          sectionsTransitions.map(({ item, props, key }) => { 
            return <RenderingC style={props} key={key} >{item.section}</RenderingC>
          })
          }
          </div>

    


          
       
     

        </ExternalWrapper>
      </Swipe>
    </AbsoluteWrapper>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_Subpage_Id, updt_animation_direction})(Home)
