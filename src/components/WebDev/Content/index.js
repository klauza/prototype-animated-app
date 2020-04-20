import React from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';

import { ContentMain, BackButton } from '../WebDevCSS';

const Content = ({ Swipe, blockFromSwipe, routes, updt_animation_direction, setIndex, update_Subpage_Id, updateSmth}) => {

  const scrollableDiv = React.useRef();
  // const [scrollLoc, setScrollLod] = React.useState(routes.web_projects); // read number from redux


  React.useEffect(()=>{
    scrollableDiv.current.classList.add('scrollable');
    // scrollableDiv.current.addEventListener('scroll', handleScroll);
    scrollableDiv.current.scrollTop = routes.web_projects;
    
  }, [])


  // React.useEffect(()=>{
  //   console.log(scrollableDiv.current.scrollTop)
  //   updateSmth(scrollableDiv.current.scrollTop);
  // })


  const handleScroll = (e) => {
    // console.log(routes);
    // if(e) console.log(scrollableDiv.current.scrollTop)
  // e.srcElement
      // scrollTop of scrollableDiv [Content]
         // update redux
      updateSmth(scrollableDiv.current.scrollTop)
    
  }

  const backUp = () => {
    blockFromSwipe();
    updt_animation_direction("up");
    setIndex(0);
    update_Subpage_Id({...routes, web_dev: 0}); 
  }
  return (
    <Swipe onSwipeEnd={handleScroll}>
    <ContentMain onWheel={(e)=>handleScroll(e)} >

      <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
      <BackButton onClick={backUp}>Back ^</BackButton>
      Content [PROJECT LIST]
      <ProjectList />
      </div>
      
    </ContentMain>
    </Swipe>
  )
}

export default Content
