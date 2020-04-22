import React from 'react';
import styled from 'styled-components';
import { AbsoluteWrapper } from '../reusable';
import { Web } from '../../Icons';

const Wrapper = styled.div`
  background: #a5c2b3;
  position: relative;
  width: 100%; height: 100vh;
  
  .not-found__content{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    span{
      color: white;
      font-size: 2.5em;
    }
  }
`;

const NotFound = () => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <div className="not-found__content">
          <span>page is not found</span>
          <Web />
        </div>
      </Wrapper>
    </AbsoluteWrapper>
  )
}

export default NotFound
