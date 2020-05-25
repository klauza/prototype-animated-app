import React, { useRef, useEffect, useState } from 'react';
import MetaTags from '../../meta-tags';
import { AbsoluteWrapper } from '../reusable';
import { SVGHero, Wrapper } from './GeneralCSS';
import history from '../../history';

// content
import Content from './Content';

// redux
import { connect } from 'react-redux';
import { update_Subpage_Id, update_subpage_scroll } from '../../actions/routesActions';
// import { routeDir } from '../RouteDirections';


const PhotographyDesign = ({ update_Subpage_Id, update_subpage_scroll, general: {scroll, routes} }) => {
  // meta-tags
  const metaData = {
    title: 'Design services - improve your business',
    description: "If you seek for tools to upgrade your business, this is the right place. Have a look what I offer and consider our partnership.",
    keywords: "web development, website, design, wireframes, webpage, service, business, google, google maps",
    robots: "home, index",
    canonicalUrl: window.location.origin
  };

  const [contentID, setContentID] = useState(routes.web_design_cat); // || read from redux
  const scrollableDiv = useRef();

  const updateReduxScrollPosition = (data) => {
    update_subpage_scroll({...scroll, web_graphics: data});
  }


  const contentTopPosition = useRef();

  useEffect(()=>{
    // adds the scroll class after section's animation
    scrollableDiv.current.classList.add('scrollable');
    scrollableDiv.current.scrollTop = scroll.web_graphics;
  //eslint-disable-next-line
  }, [])

  React.useEffect(()=>{
    // fires when component dismounts
    if(history.location.state === 2) return
    updateReduxScrollPosition(scrollableDiv.current.scrollTop);
    // return(()=>{
    //   updateReduxScrollPosition(scrollableDiv.current.scrollTop);
    // })
    //eslint-disable-next-line
  }, [history.location.state])




  const selectContent = (id) => {
    setContentID(id);
    update_Subpage_Id({ ...routes, web_design_cat: id }); 
    if(contentID !== null){
      contentTopPosition.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }


  return (
    <>
    <MetaTags metaData={metaData} />
    <AbsoluteWrapper>
      <Wrapper isLegit={contentID}>
        <div ref={scrollableDiv} style={{overflowY: 'scroll', overflowX: 'hidden'}}>
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
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_subpage_scroll, update_Subpage_Id})(PhotographyDesign)
