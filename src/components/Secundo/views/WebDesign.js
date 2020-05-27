import React from 'react';
import { Wrapper } from './WebDesignCSS';
import { SmileIcon } from '../../../media';

const WebDesign = () => {
  return (
    <Wrapper>
      <h1>Take a smiley face with you on your trip</h1>
      <img src={SmileIcon} alt='' />
    </Wrapper>
  )
}

export default WebDesign
