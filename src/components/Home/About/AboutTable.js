import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

const AboutTable = ({tableId, setTableId}) => {

  const servicesData = [
    {
      id: 0,
      icon: "icon_1",
      tablet_pc_text: "WWW",
      title: "Web Development",
      contentText: ['www application', 'google My Business implementation'],
      path: "/page-one"
    },
    {
      id: 1,
      icon: "icon_2",
      tablet_pc_text: "Design",
      title: "Photography, design",
      contentText: ["photo editing", "stock photos", "web wireframing", "icons"],
      path: "/page-two"
    },
    {
      id: 2,
      icon: "icon_3",
      tablet_pc_text: "",
      title: "Cybersecurity",
      contentText: ['currently no services available'],
      path: "/page-three"
    }
  ];
  
  const transitions = useTransition(servicesData[tableId], item=>item.id, {
    from: {opacity: 0, transform: 'translate(0px, 50px)'},
    enter: {opacity: 1, transform: 'translate(0px, 0px)'},
    leave: {opacity: 0, transform: 'translate(0px, 50px)'}
  })


  return (
    <>

      <div className="tables">
        {servicesData.map((item, i) => 
          {
            return ( <div key={i} className={`table table-${i+1} ${tableId===i ? "active" : null}`} onClick={()=>{setTableId(i)}}> {i+1} </div>)
          }
        )}
      </div>

      <div className="content">
      {
        transitions.map(({ item, props, key }) => { 
          return (
          <animated.div 
            style={props} 
            key={key} 
            className={`content-${item.id+1}`}
          > 
            <h2>{item.title}</h2>
            {item.contentText.map((itm, i) => <p key={i}>{itm}</p>)}
            <NavLink exact to={{pathname: item.path, state: item.id+1}}>Learn more</NavLink>

          </animated.div>
          )
        })
      }
      </div>

    </>
  )
}

export default AboutTable
