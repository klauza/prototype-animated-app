import React, { useRef } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { elementDir } from '../RouteDirections';
import MetaTags from '../../meta-tags';
import history from '../../history';

// redux
import { connect } from 'react-redux';
import { update_subpage_scroll } from '../../actions/routesActions';

// CSS
import { Wrapper, Header } from './TertioCSS';

import { AbsoluteWrapper } from '../reusable';

import TheSlider from './TheSlider';

const generalAnimation = config.stiff;


const Tertio = ({ update_subpage_scroll, general: {scroll, routes, animationDirection} }) => {
  // meta-tags
  const metaData = {
    title: 'Proto Tertio',
    description: "proto tertio route",
    keywords: "web development, website, webpage, service, business, google, google maps",
    robots: "home, index",
    canonicalUrl: window.location.origin
  };

  const updateReduxScrollPosition = (data) => {
    update_subpage_scroll({...scroll, tertio: data});
  }

  const scrollableDiv = useRef();

  React.useEffect(()=>{
    scrollableDiv.current.classList.add('scrollable');
    scrollableDiv.current.scrollTop = scroll.tertio;
  
  }, [])

  React.useEffect(()=>{
    // fires when component dismounts
    if(history.location.state === 3) return
    updateReduxScrollPosition(scrollableDiv.current.scrollTop);

  }, [history.location.state])

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
export default connect(mapStateToProps, {update_subpage_scroll})(Tertio)
