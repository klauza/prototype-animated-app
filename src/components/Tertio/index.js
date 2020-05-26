import React, { useRef } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { elementDir } from '../RouteDirections';
import MetaTags from '../../meta-tags';

// redux
import { connect } from 'react-redux';
import { update_Subpage_Id, update_subpage_scroll } from '../../actions/routesActions';


import { AbsoluteWrapper } from '../reusable';
import styled from 'styled-components';

import TheSlider from './TheSlider';

const generalAnimation = config.stiff;

const Wrapper = styled.div`
  height: auto;
  color: #fff;
  background: #d4d4d4;
  padding-bottom: 100px;

  .swiper-container{
    margin: 25px 2.5px;
    height: 300px;
    background: white;
  }
  .scrollable{
    height: 100vh; 
    overflow-y: auto;
  }
`;

const Header = styled.div`
  height: 400px;
  background: black;
  position: relative;

  .heading-h1{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  h1{
    font-family: Verdana;
    font-size: 10em;
    transform: translate(-50%, -50%);
  }
`;


const Tertio = ({ general: {scroll, routes, animationDirection} }) => {
  // meta-tags
  const metaData = {
    title: 'Web Development services - improve your business',
    description: "If you seek for tools to upgrade your business, this is the right place. Have a look what I offer and consider our partnership.",
    keywords: "web development, website, webpage, service, business, google, google maps",
    robots: "home, index",
    canonicalUrl: window.location.origin
  };
  const scrollableDiv = useRef();

  React.useEffect(()=>{
    scrollableDiv.current.classList.add('scrollable');
    scrollableDiv.current.scrollTop = scroll.web_graphics;
  
  }, [])

  return (
    <>
    <MetaTags metaData={metaData} />
    <AbsoluteWrapper>
      <Wrapper>
        <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>

          <Header>
            <Spring
              config={generalAnimation}
              delay={250}
              from={{ transform: elementDir(animationDirection), opacity: 0  }}
              to={{ transform: "translate(0px, 0px)", opacity: 1}}
            >
              {props => 
                <div className="heading-h1" style={props}>
                  <h1>III</h1>
                </div>
              }
            </Spring>
          </Header>

          <TheSlider/>
          <TheSlider/>

        </div>
      </Wrapper>
    </AbsoluteWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_subpage_scroll, update_Subpage_Id})(Tertio)
