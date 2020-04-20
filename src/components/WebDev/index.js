import React, { useState } from 'react'
import styled from 'styled-components';

import Swipe from 'react-easy-swipe';

// redux
import { connect } from 'react-redux';
import { update_Subpage_Id, updt_animation_direction, update_subpage_scroll } from '../../actions/routesActions';
import { routeDir } from '../RouteDirections';


// index pages
import Hero from './Hero';
import Content from './Content';

import { AbsoluteWrapper } from '../reusable';
import { useTransition, animated } from 'react-spring'

const Wrapper = styled.div`
  // background: lightsalmon;
  // margin-top: 50px;

  h1{
    text-align: center;
    padding-top: 50px;
  }
`;

const ExternalWrapper = styled.div`
  position: relative;
`;

const VerticalComponent = styled(animated.div)`
  width: 100%; height: 100%;
  position: absolute; bottom: 0; top:0;
`;


const WebDevelopment = ({update_Subpage_Id, update_subpage_scroll, updt_animation_direction, general: {scroll, routes, animationDirection}}) => {

  const [index, setIndex] = useState(routes.web_dev);  // read index from Redux
  const [blockSwipe, setBlockSwipe] = useState(false);


  const updateReduxScrollPosition = (data) => {
    update_subpage_scroll({...scroll, web_projects: data});
  }


  const handleScroll = (e) => {
    if(!blockSwipe){
      let direction;

      // detect if firefox
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        direction = -e.deltaY;
      } else{
        direction = e.nativeEvent.wheelDelta;
      }
   
      if(direction < 0 && index < 1){
        updt_animation_direction('down');   // update direction
        
        blockFromSwipe();   // temp prevent from scroll

        setIndex(1);   // page ID

        update_Subpage_Id({...routes, web_dev: 1});    // set current page
      }
    } else{
      return;
    }
  }

  // MOBILE SWIPE
  const onSwipeMove = (position, event) => {
    if(!blockSwipe){

      if(position.y < -75 && index < 1){
        updt_animation_direction('down');
        
        // blockFromSwipe(); 
        setBlockSwipe(true);

        setIndex(1);
      // console.log(position)
      update_Subpage_Id({...routes, web_dev: 1});
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
      section: <Hero 
                index={index} 
                animationDirection={animationDirection} 
                routes={routes} 
                />,
      id: 0
    }, 
    {
      section: <Content 
              Swipe={Swipe}
              onSwipeMove={onSwipeMove}
              updateReduxScrollPosition={updateReduxScrollPosition}
              handleScroll={handleScroll}
              // index={index} 
              blockFromSwipe={blockFromSwipe}
              setIndex={setIndex}
              // animationDirection={animationDirection}
              updt_animation_direction={updt_animation_direction}
              update_Subpage_Id={update_Subpage_Id}
              routes={routes}
              scroll={scroll}
              index={index}
              animationDirection={animationDirection}
              />,
      id: 1
    }
  ];

  const sectionsTransitions = useTransition(sections[index], sec => sec.id, {
    from: {opacity: 0, transform: routeDir(animationDirection) },
    enter: {opacity: 1, transform: "translate(0px, 0px)" },
    leave: {opacity: 0, transform: routeDir(animationDirection, true) }
  })



  return (
    <AbsoluteWrapper>

      <ExternalWrapper onWheel={(e)=>handleScroll(e)}>
        <Swipe onSwipeMove={onSwipeMove}>
            <div style={{position: "reltaive", width: "100%", height: "100vh"}}>
              <Wrapper>
              
                {
                  sectionsTransitions.map(({ item, props, key }) => { 
                    return <VerticalComponent style={props} key={key} >{item.section}</VerticalComponent>
                  })
                }

              </Wrapper>
            </div>
        </Swipe>
      </ExternalWrapper>

    </AbsoluteWrapper>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_subpage_scroll, update_Subpage_Id, updt_animation_direction})(WebDevelopment)
