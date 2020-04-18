import React from 'react';
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

  const [open, setOpen] = React.useState(true);
  // const [secondOpen, setSecondOpen] = React.useState(false);

  // Modal form
  // const [modalDelay, setModalDelay] = React.useState(false);
  // scrolling
  const [index, setIndex] = React.useState(routes.home);  // read index from Redux
  const [blockSwipe, setBlockSwipe] = React.useState(false);

  // const [stateAnimDir, setStateAnimDir] = React.useState(undefined);




  // const propsHero = useSpring({ height: index===0 ? "100vh" : "0vh", opacity: index===0 ? "1" : "0" });
  // const propsAbout = useSpring({ height: index===1 ? "100vh" : "0vh", opacity: index===1 ? "1" : "0" });
  // const propsContact = useSpring({ height: index===2 ? "100vh" : "0vh", opacity: index===2 ? "1" : "0" });


  // const aboutBtnProp = useSpring({ top: index===0 ? "100vh" : index===1 ? "0vh" : "0vh"});
  // const contactBtnProp = useSpring({ top: index===0 ? "100vh" : index===1 ? "100vh" : "0vh"});
  
  // console.log(index);

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
      // next, going down
      if(direction < 0 && index < 2){
        // toggleOpen();
        blockFromSwipe(); 

        
        setIndex(prevState => prevState+1);

        
        // set current page
        update_Subpage_Id({...routes, home: index+1});
        updt_animation_direction('down');
      }
     // prev, going up
      if(direction > 0 && index > 0){
        // toggleOpen();
        blockFromSwipe(); 
        

        setIndex(prevState => prevState-1);

        // set current page
        update_Subpage_Id({...routes, home: index-1});
        
        updt_animation_direction('up');
      }
    } else{
      return;
    }
  }

  // MOBILE SWIPE
  const onSwipeMove = (position, event) => {
    // console.log(position);
    if(!blockSwipe){
      // next, going down
      if(position.y < -75 && index < 2){
        updt_animation_direction('down');
        // toggleOpen();
        blockFromSwipe(); 


        setIndex(prevState => prevState+1);


        // set current page
        update_Subpage_Id({...routes, home: index+1});
      }
     // prev, going up
      if(position.y > 75 && index > 0){
        updt_animation_direction('up');
        // toggleOpen();
        blockFromSwipe(); 
        
        
        setIndex(prevState => prevState-1);

        
        // set current page
        update_Subpage_Id({...routes, home: index-1});
      }
    } else{
      return;
    }
  }

  // BLOCK FROM SCROLL
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
      id: 0,
      background: "#d4d4d4"
    }, 
    {
      section: <About 
              animationDirection={animationDirection}
              update_Subpage_Id={update_Subpage_Id}
              routes={routes}
              animationDirection={animationDirection}
              index={index} />,
      id: 1,
      background: "orange"
    }, 
    {
      section: <Contact index={index} />,
      id: 2,
      background: "pink"
    }
  ];
  
  // direction
  const dir = routeDir(animationDirection);
  console.log('direction: ',dir);

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
