import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const AboutTable = ({tableId, setTableId}) => {

  // const [index, setIndex] = useState(0);

  const servicesData = [
    {
      id: 0,
      contentText: 'one'
    }, 
    {
      id: 1,
      contentText: 'two two two two'
    }, 
    {
      id: 2,
      contentText: 'three'
    }
  ];
  
  const transitions = useTransition(servicesData[tableId], item=>item.id, {
    from: {opacity: 0, transform: 'scale(1.2)'},
    enter: {opacity: 1, transform: 'scale(1)'},
    leave: {opacity: 0, transform: 'scale(0.8)'}
  })



  return (
    <>
      <div className="tables">
        <div className={`table table-1 ${tableId===0 ? "active" : null}`} onClick={()=>{setTableId(0)}}>1</div>
        <div className={`table table-2 ${tableId===1 ? "active" : null}`} onClick={()=>{setTableId(1)}}>2</div>
        <div className={`table table-3 ${tableId===2 ? "active" : null}`} onClick={()=>{setTableId(2)}}>3</div>
      </div>


      <div className="contents">
      {
        transitions.map(({ item, props, key }) => { 
          return (
          <animated.div 
            style={props} 
            key={key} 
            className={`content-${item.id+1}`}
          >
              <span>content {item.contentText}</span>
          </animated.div>
          )
        })
      }
      </div>
     

    </>
  )
}

export default AboutTable
