import React from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';

import { ContentMain, BackButton } from '../WebDevCSS';

const Content = ({blockFromSwipe, routes, updt_animation_direction, setIndex, update_Subpage_Id}) => {

  const scrollableDiv = React.useRef();

  React.useEffect(()=>{
    // adds the scroll class after section's animation
    setTimeout(()=>{
      scrollableDiv.current.classList.add('scrollable');

    }, 550)
  }, [])

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
