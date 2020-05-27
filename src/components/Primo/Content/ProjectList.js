import React from 'react';
import { ProjectsWrapper } from '../PrimoCSS';
import { SmileIcon } from '../../../media';

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
      title: 'Turkey',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      main_image: SmileIcon,
      features: ["sauna", "5-star restaurant", "free fast wifi"],
      attractions: ["pool", "kayak trips", "visiting local area"],
      images: [SmileIcon, SmileIcon, SmileIcon, SmileIcon]
    },
    {
      id: 1,
      live_page: "https://www.google.com",
      title: 'Greece',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      main_image: SmileIcon,
      features: ["sauna", "5-star restaurant", "free fast wifi"],
      attractions: ["pool", "kayak trips", "visiting local area"],
      images: [SmileIcon, SmileIcon, SmileIcon, SmileIcon]
    },
    {
      id: 2,
      live_page: "https://www.google.com",
      title: 'Bulgaria',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      main_image: SmileIcon,
      features: ["sauna", "5-star restaurant", "free fast wifi"],
      attractions: ["pool", "kayak trips", "visiting local area"],
      images: [SmileIcon, SmileIcon, SmileIcon, SmileIcon]
    },
    {
      id: 3,
      live_page: "https://www.google.com",
      title: 'Italy',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      main_image: SmileIcon,
      features: ["sauna", "5-star restaurant", "free fast wifi"],
      attractions: ["pool", "kayak trips", "visiting local area"],
      images: [SmileIcon, SmileIcon, SmileIcon, SmileIcon]
    },
    {
      id: 4,
      live_page: "https://www.google.com",
      title: 'Tunisia',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      main_image: SmileIcon,
      features: ["sauna", "5-star restaurant", "free fast wifi"],
      attractions: ["pool", "kayak trips", "visiting local area"],
      images: [SmileIcon, SmileIcon, SmileIcon, SmileIcon]
    },
    {
      id: 5,
      live_page: "https://www.google.com",
      title: 'Portugal',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
      main_image: SmileIcon,
      features: ["sauna", "5-star restaurant", "free fast wifi"],
      attractions: ["pool", "kayak trips", "visiting local area"],
      images: [SmileIcon, SmileIcon, SmileIcon, SmileIcon]
    }
  ]

  return (
    <ProjectsWrapper>

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
