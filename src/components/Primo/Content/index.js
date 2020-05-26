import React from 'react';
import ProjectList from './ProjectList';
import history from '../../../history';

import { ContentMain, BackButton, HeroTopImage, Wrapper } from '../PrimoCSS';


const Content = ({ index, blockFromSwipe, routes, scroll, updt_animation_direction, setIndex, update_Subpage_Id, animationDirection, updateReduxScrollPosition}) => {

  const scrollableDiv = React.useRef();

  React.useEffect(()=>{
    scrollableDiv.current.classList.add('scrollable');
    scrollableDiv.current.scrollTop = scroll.web_projects;
    //eslint-disable-next-line
  }, []);

  React.useEffect(()=>{
    // fires when component dismounts
    if(history.location.state === 1) return
    updateReduxScrollPosition(scrollableDiv.current.scrollTop);

    //eslint-disable-next-line
  }, [history.location.state])


  const backUp = () => {
    blockFromSwipe();
    updt_animation_direction("to_down");
    setIndex(0);
    update_Subpage_Id({ ...routes, web_dev: 0 }); 
  }


  return (
    <ContentMain>  
      <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
        <BackButton onClick={backUp}>Back ^</BackButton>
          
        <HeroTopImage bg={"https://www.gettyimages.co.uk/gi-resources/images/500px/983794168.jpg"}>
          <div className="hero_top_image--content">
            <h1>TEXT_TEXT</h1>
          </div>
        </HeroTopImage>     

        <Wrapper>
      



          <ProjectList animationDirection={animationDirection} />

        </Wrapper>
      </div>
      
    </ContentMain>
  )
}
export default Content