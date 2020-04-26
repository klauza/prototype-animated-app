import React from 'react';
import MetaTags from '../../meta-tags';

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
  // meta-tags
  const metaData = {
    title: 'Web Development services - improve your business',
    description: "If you seek for tools to upgrade your business, this is the right place. Have a look what I offer and consider our partnership.",
    keywords: "web development, website, webpage, service, business, google, google maps",
    robots: "home, index",
    canonicalUrl: window.location.origin
  };

  React.useEffect(()=>{
    
    
  }, [])

  return (
    <>
    <MetaTags metaData={metaData} />
    <AbsoluteWrapper>
      <Wrapper>
        <h1>Page three</h1>
        
        <TheSlider/>
      </Wrapper>
    </AbsoluteWrapper>
    </>
  )
}

export default Cybersecurity
