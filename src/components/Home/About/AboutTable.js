import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
// import SVG (temp)
import { Cyb, Photo, Web } from '../../../Icons';

const AboutTable = ({ tableId, setTableId, update_Subpage_Id, routes }) => {

  const servicesData = [
    {
      id: 0,
      icon: <Cyb/>,
      table_text: "WWW",
      title: "Web Development",
      contentText: ['www application', 'google My Business implementation'],
      path: "/web-development"
    },
    {
      id: 1,
      icon: <Photo/>,
      table_text: "Design",
      title: "Photography, design",
      contentText: ["photo editing", "stock photos", "web wireframing - would you like to see wireframes of This page? [example]", "icons"],
      path: "/photography-design"
    },
    {
      id: 2,
      icon: <Web/>,
      table_text: "Security",
      title: "Cybersecurity",
      contentText: ['currently no services available'],
      path: "/security"
    }
  ];
  
  const transitions = useTransition(servicesData[tableId], item=>item.id, {
    from: {opacity: 0, transform: 'translateX(35px)'},
    enter: {opacity: 1, transform: 'translateX(0px)'},
    leave: {opacity: 0, transform: 'translateX(0px)'}
  })


  return (
    <>

      <div className="tables">
        {servicesData.map((item, i) => 
          {
            return ( 
              <div 
                key={i} 
                className={`table table-${i+1} ${tableId===i ? "active" : null}`} 
                onClick={()=>{setTableId(i); update_Subpage_Id({...routes, about: i});}}
              >  <div className="table-content"><span>{item.table_text}</span>{item.icon}</div> </div> )
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
