import React from 'react';
import { useTransition, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
// import SVG (temp)
import { Confused, Sad, Smiley } from '../../../Icons';

const AboutTable = ({ lockAnimation, tableId, setTableId, update_Subpage_Id, routes }) => {





  const servicesData = [
    {
      id: 0,
      icon: <Smiley/>,
      table_text: "HAPPY",
      title: "HAPPY",
      contentText: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod veniam?', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, sunt.']
    },
    {
      id: 1,
      icon: <Sad/>,
      table_text: "Sas",
      title: "SAD",
      contentText: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod veniam?", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, sunt.", "lorem"]
    },
    {
      id: 2,
      icon: <Confused/>,
      table_text: "CONFUSED",
      title: "CONFUSED",
      contentText: ['Lorem, ipsum dolor.']
    }
  ];
  
  const transitions = useTransition(servicesData[tableId], item=>item.id, {
    immediate: lockAnimation,
    from: {opacity: 0, transform: 'translateX(35px)'},
    enter: {opacity: 1, transform: 'translateX(0px)'},
    leave: {opacity: 0, transform: 'translateX(-15px)'}
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
              >  <div className={`table-content color-${tableId===i && tableId}`}><span>{item.table_text}</span>{item.icon}</div> </div> )
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
            
          </animated.div>
          )
        })
      }
      </div>

    </>
  )
}

export default AboutTable
