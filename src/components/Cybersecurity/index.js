import React from 'react'

import { AbsoluteWrapper } from '../reusable';
import styled from 'styled-components';

import TheSlider from './TheSlider';

const Wrapper = styled.div`
  min-height: 100vh;
  color: #fff;
  background: #d4d4d4;

  h1{
    text-align: center;
    padding-top: 100px;
  }

`;
const Cybersecurity = () => {


  React.useEffect(()=>{
    
    
  }, [])

  return (
    <AbsoluteWrapper>
      <Wrapper>
        <h1>Page three</h1>
        
        <TheSlider/>
      </Wrapper>
    </AbsoluteWrapper>
  )
}

export default Cybersecurity
