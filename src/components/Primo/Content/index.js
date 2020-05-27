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
    
    // update scroll position
    updateReduxScrollPosition(scrollableDiv.current.scrollTop);

  }


  return (
    <ContentMain>  
      <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
        <BackButton onClick={backUp}>Back ^</BackButton>
          
        <HeroTopImage bg={"https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}>
          <div className="hero_top_image--content">
            <h1>Primo - find location where you will be happy!</h1>
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