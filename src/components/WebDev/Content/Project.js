import React from 'react';
import { ProjectDiv } from '../WebDevCSS';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops'

const Project = ({ isToggled, project, id, toggle }) => {



  return (
    <ProjectDiv className="project project__container">

      <div className="project__main">
        <div className="project__main-top">
          <div className="image">
            <img src="https://www.gettyimages.co.uk/gi-resources/images/500px/983794168.jpg" alt="" />
          </div>

          <div className="info">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>

          <div className="live-btn">
            <button>Live page</button>
          </div>
        </div>

        <Spring from={{ height: 0 }} to={{ height: isToggled===id ? 'auto' : 0 }}>
          {props => (
            <animated.div className="project__main-bot" style={props}>
              <span>Content 1</span>
              <span>Content 2</span>
            </animated.div>
          )}

        </Spring>

      </div>

      <div className="project__more">
        <button onClick={()=>toggle(id)}>more details</button>
      </div>

    </ProjectDiv>
  )
}

export default Project
