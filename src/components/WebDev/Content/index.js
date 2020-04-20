import React from 'react';
import ProjectList from './ProjectList';

import { ContentMain, BackButton } from '../WebDevCSS';

const Content = ({ index, blockFromSwipe, routes, scroll, updt_animation_direction, setIndex, update_Subpage_Id, animationDirection, updateReduxScrollPosition}) => {

  const scrollableDiv = React.useRef();

  const [route, setRoute] = React.useState(routes.web_dev)

  React.useEffect(()=>{
    scrollableDiv.current.classList.add('scrollable');
    scrollableDiv.current.scrollTop = scroll.web_projects;
  }, [])

  React.useEffect(()=>{
    // fires when component dismounts
    // update_Subpage_Id({...routes, web_dev: index });

    return(()=>{
      updateReduxScrollPosition(scrollableDiv.current.scrollTop);

      // update_Subpage_Id({ ...routes, web_projects: scrollableDiv.current.scrollTop });
    })
  }, [])


  const backUp = () => {
    blockFromSwipe();
    updt_animation_direction("up");
    setIndex(0);
    update_Subpage_Id({ ...routes, web_dev: 0 }); 
  }
  return (

    <ContentMain>

      <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
        <BackButton onClick={backUp}>Back ^</BackButton>
        <span>Content [PROJECT LIST]</span>
        <ProjectList />
      </div>
      
    </ContentMain>

  )
}

export default Content
