import React from 'react';
import styled from 'styled-components';
import { ContentMain } from '../WebDevCSS';

const Content = ({blockFromSwipe, routes, updt_animation_direction, setIndex, update_Subpage_Id}) => {

  const backUp = () => {
    blockFromSwipe();
    updt_animation_direction("up");
    setIndex(0);
    update_Subpage_Id({...routes, web_dev: 0}); 
  }
  return (
    <ContentMain>
      <button onClick={backUp}>Back ^</button>
      Content [PROJECT LIST]
    </ContentMain>
  )
}

export default Content
