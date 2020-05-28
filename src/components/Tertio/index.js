import React, { useState, useRef } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { elementDir } from '../RouteDirections';
import MetaTags from '../../meta-tags';
import history from '../../history';

import Swipe from 'react-easy-swipe';

// redux
import { connect } from 'react-redux';
import { update_subpage_scroll } from '../../actions/routesActions';

// CSS
import { Wrapper, Header } from './TertioCSS';

import { AbsoluteWrapper } from '../reusable';

import TheSlider from './TheSlider';

const generalAnimation = config.stiff;


const Tertio = ({ update_subpage_scroll, general: {tools, scroll, routes, animationDirection} }) => {
  // meta-tags
  const metaData = {
    title: 'Proto Tertio',
    description: "proto tertio route",
    keywords: "web development, website, webpage, service, business, google, google maps",
    robots: "home, index",
    canonicalUrl: window.location.origin
  };
  
  // mouse position
  const [currPosition, setCurrPosition] = useState(0);

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

  
  // mouse drag events
  const onPointerUp = () => {
    if(tools.pc_mouse_move){
      setCurrPosition(0);
    } else return
  }

  const onSwipeMove = (position, event) => {
    console.log(position.y)
    // setCurrPosition(position.y);

    let distance = position.y - currPosition;

    setCurrPosition(position.y); // setting next

    if(currPosition > position.y){
      // setCurrPosition(0);   // reset
      console.log('down')
    }

    scrollableDiv.current.scrollTop = scrollableDiv.current.scrollTop - distance;
  }

  return (
    <>
    <MetaTags metaData={metaData} />
    <AbsoluteWrapper>
      <Wrapper>

        <Swipe 
          onSwipeMove={onSwipeMove} 
          allowMouseEvents={tools.pc_mouse_move && true} 
        >
          <div 
            ref={scrollableDiv} 
            style={{overflowY: 'scroll'}}
            onPointerUp={onPointerUp} 
          >

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

            <TheSlider funny={true} text="smiling slider" />
            <TheSlider funny={false} text="not so smiling slider" />

          </div>
        </Swipe>

      </Wrapper>
    </AbsoluteWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_subpage_scroll})(Tertio)
