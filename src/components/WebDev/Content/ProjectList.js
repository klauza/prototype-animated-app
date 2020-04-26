import React from 'react';
import { ProjectsWrapper } from '../WebDevCSS';

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

  const data2 = [
    {
      id: 0,
      title: 'project_0',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit."
    },
    {
      id: 1,
      title: 'project_1',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit."
    },
    {
      id: 2,
      title: 'project_2',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit."
    },
    {
      id: 3,
      title: 'project_3',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit."
    },
    {
      id: 4,
      title: 'project_4',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit."
    },
    {
      id: 5,
      title: 'project_5',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit."
    }
  ]
  
  // const height = isToggled ? "auto" : "300px";
  // console.log(height);

  return (
    <ProjectsWrapper>
         <span>Content1</span>
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

<span>Content2</span>
            {
        data2.map((project, id) => { return (
          <div key={project.id} className="project__container">

            <div className="project__container--image">
              <img src="https://www.gettyimages.co.uk/gi-resources/images/500px/983794168.jpg" alt="" />
            </div>
            
            <div className="project__container--info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>

            <div className="project__container--btns">
              <button>open live page</button>
              <button>read more</button>
            </div>

          </div>
          )} 
      )}

<span>Content3</span>
- - - -
    </ProjectsWrapper>
  )
}

export default ProjectList
