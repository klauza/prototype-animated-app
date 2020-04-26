import React, { useRef, useEffect, useState } from 'react'
import { AbsoluteWrapper } from '../reusable';
import { SVGHero, Wrapper } from './DeisngCSS';

// content
import Content from './Content';



const PhotographyDesign = () => {

  const [contentID, setContentID] = useState(null); // || read from redux
  const scrollableDiv = useRef();


  const contentTopPosition = useRef();

  useEffect(()=>{
    // adds the scroll class after section's animation
    setTimeout(()=>{
      scrollableDiv.current.classList.add('scrollable');
    }, 550)
  }, [])



  const selectContent = (id) => {
    setContentID(id);
    if(contentID !== null){
      contentTopPosition.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }


  return (
    <AbsoluteWrapper>
      <Wrapper isLegit={contentID}>
        <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
          <SVGHero />
          <div className={`div-container`}>
            <div onClick={()=>selectContent(0)} className={`section section-1 ${contentID===0 ? "flex" : null} ${contentID !== null && contentID!==0 ? "shaded" : null}`} style={{backgroundColor: "red"}}>
              <span>0</span>
            </div>
            <div onClick={()=>selectContent(1)} className={`section section-2 ${contentID===1 ? "flex" : null} ${contentID !== null && contentID!==1 ? "shaded" : null}`} style={{backgroundColor: "green"}}>
              <span>1</span>
            </div>
            <div onClick={()=>selectContent(2)} className={`section section-3 ${contentID===2 ? "flex" : null} ${contentID !== null && contentID!==2 ? "shaded" : null}`} style={{backgroundColor: "blue"}}>
              <span>2</span>
            </div>
          </div>

          {contentID !== null 
            ? <Content id={contentID} contentTopPosition={contentTopPosition} /> 
            : <h1>^ Selected category you would like to see</h1>
          }
          
          
            
        </div>
      </Wrapper>
    </AbsoluteWrapper>
  )
}

export default PhotographyDesign
