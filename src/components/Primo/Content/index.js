import React, {useState} from 'react';
import ProjectList from './ProjectList';
import history from '../../../history';

import Swipe from 'react-easy-swipe';

import { ContentMain, BackButton, HeroTopImage, Wrapper } from '../PrimoCSS';

const Content = ({ tools, index, blockFromSwipe, routes, scroll, updt_animation_direction, setIndex, update_Subpage_Id, animationDirection, updateReduxScrollPosition}) => {

  // mouse position
  const [currPosition, setCurrPosition] = useState(0);

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

  // mouse drag functions
  const onPointerUp = () => {
    if(tools.pc_mouse_move){
      setCurrPosition(0);
    } else return
  }

  const onSwipeMove = (position, event) => {
    if(tools.pc_mouse_move){
      let distance = position.y - currPosition;

      setCurrPosition(position.y); // setting next

      scrollableDiv.current.scrollTop = scrollableDiv.current.scrollTop - distance;
    }
  }


  return (
    <ContentMain>  

      <Swipe 
        onSwipeMove={onSwipeMove} 
        allowMouseEvents={tools.pc_mouse_move && true} 
      >
        <div 
          ref={scrollableDiv} 
          style={{overflowY: 'scroll'}}
          onPointerUp={onPointerUp}
        >
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

      </Swipe>
      
    </ContentMain>
  )
}
export default Content