import React from 'react';
import { ProjectsWrapper } from '../PrimoCSS';

import Project from './Project';

// import { elementDir } from '../../RouteDirections';

  // animate with intersection

const ProjectList = ({ animationDirection }) => {
  // web_dev_projects
  const [isToggled, setIsToggled] = React.useState(null);

  const toggle = (id) => {
    if(id === isToggled){
      setIsToggled(null);
    } else{
      setIsToggled(id);
    }
  }

  const data = [
    {
      id: 0,
      live_page: "https://www.google.com",
      title: 'project_0',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      features: ["auth system", "payment setup", "PWA"],
      technologies: ["React", "MongoDB", "Webpack", "Express.js"],
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU"]
    },
    {
      id: 1,
      live_page: "https://www.google.com",
      title: 'project_1',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      features: ["React"],
      technologies: ["x"],
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU"]
    },
    {
      id: 2,
      live_page: "https://www.google.com",
      title: 'project_2',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      features: ["1"],
      technologies: ["x"],
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU"]
    },
    {
      id: 3,
      live_page: "https://www.google.com",
      title: 'project_3',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      features: ["1"],
      technologies: ["x"],
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU"]
    },
    {
      id: 4,
      live_page: "https://www.google.com",
      title: 'project_4',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      features: ["1"],
      technologies: ["x"],
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU"]
    },
    {
      id: 5,
      live_page: "https://www.google.com",
      title: 'project_5',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      features: ["1"],
      technologies: ["x"],
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZkTb0pg8FNABUqmBHFFrMnYP0tISPxxSXb_spedbxKkqXtk6&usqp=CAU"]
    }
  ]

  return (
    <ProjectsWrapper>

         <span> -- Content -- </span>
            {
        data.map((project, id) => { return (
            <Project 
              key={id}
              isToggled={isToggled} 
              project={project} 
              id={project.id} 
              toggle={toggle} 
            />
          )} 
      )}

    </ProjectsWrapper>
  )
}

export default ProjectList
