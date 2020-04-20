import React from 'react';
import { ProjectsWrapper } from '../WebDevCSS';

const ProjectList = () => {
  // web_dev_projects
  const data = [
    {
      id: 0,
      title: 'project_0'
    },
    {
      id: 1,
      title: 'project_1'
    },
    {
      id: 2,
      title: 'project_2'
    },
    {
      id: 3,
      title: 'project_3'
    },
    {
      id: 4,
      title: 'project_4'
    },
    {
      id: 5,
      title: 'project_5'
    }
  ]
  return (
    <ProjectsWrapper>
      {
        data.map((project, id) => { return <div key={project.id} className="project__container">
            <h3 className="project__container--title">Title: {project.title}</h3>
            <p className="project__container--desc">Nunc varius varius tempor. Mauris eget massa vitae leo porttitor euismod. Aliquam erat volutpat. Nulla dictum metus ut justo facilisis, sagittis convallis ipsum pretium. Proin sed augue sollicitudin dui auctor faucibus. Aenean rhoncus nec elit accumsan scelerisque. Nunc iaculis varius urna ut tincidunt.</p>
          </div>
        } 
      )}
    </ProjectsWrapper>
  )
}

export default ProjectList
