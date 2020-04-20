import React from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';

import { ContentMain, BackButton } from '../WebDevCSS';

const Content = ({blockFromSwipe, routes, updt_animation_direction, setIndex, update_Subpage_Id, updateSmth}) => {

  const scrollableDiv = React.useRef();
  // const [scrollLoc, setScrollLod] = React.useState(routes.web_projects); // read number from redux

  React.useEffect(()=>{
    scrollableDiv.current.classList.add('scrollable');
    scrollableDiv.current.addEventListener('scroll', handleScroll);
    scrollableDiv.current.scrollTop = routes.web_projects;
    
  }, [])


  const handleScroll = (event) => {
  

      // scrollTop of scrollableDiv [Content]
         // update redux
      updateSmth(event.srcElement.scrollTop)
    


 
  }

  const backUp = () => {
    blockFromSwipe();
    updt_animation_direction("up");
    setIndex(0);
    update_Subpage_Id({...routes, web_dev: 0}); 
  }
  return (
    <ContentMain>

      <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
      <BackButton onClick={backUp}>Back ^</BackButton>
      Content [PROJECT LIST]
      <ProjectList />
      </div>
      
    </ContentMain>
  )
}

export default Content
