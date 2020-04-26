import React, { useRef } from 'react';
import { ProjectDiv } from '../WebDevCSS';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops'

const Project = ({ isToggled, project, id, toggle }) => {

  const thisProject = useRef();

  const readMoreClick = () => {
    toggle(id);
    if(isToggled===id) return
    thisProject.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <ProjectDiv key={id} className="project project__container" ref={thisProject}>

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
            <button><a href={project.live_page} rel="noopener noreferrer" target="_blank">Live<br/>page</a></button>
          </div>
        </div>

        <Spring from={{ height: 0 }} to={{ height: isToggled===id ? 'auto' : 0 }}>
          {props => (
            <animated.div className="project__main-bot" style={props}>
              <div className="features">
                <span>Features</span>
                {project.features.map((feature, k) => <div key={k}>{feature}</div>)}
              </div>
              <div className="technologies">
                <span>Technologies</span>
                {project.technologies.map((techn, k) => <div key={k}>{techn}</div>)}
              </div>
              <div className="images">
                <span>Demonstrative images</span>
                <div className="img-holder">
                  {project.images.map((img, k) => <div key={k}> <img src={img} /> </div>)}
                </div>
              </div>
            </animated.div>
          )}

        </Spring>

      </div>

      <div className="project__more">
          <button onClick={readMoreClick}>more details {isToggled===id ? "^" : "v"}</button>
      </div>

    </ProjectDiv>
  )
}

export default Project
