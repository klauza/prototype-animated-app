import React from 'react'

const AboutTable = ({tableId, setTableId}) => {

  const servicesData = [
    {
      contentText: 'one'
    }, 
    {
      contentText: 'two'
    }, 
    {
      contentText: 'three'
    }
  ];
  
  // render table content
  const renderTableContent = (id) => {
    return (<div className={`content-${id}`}>content {servicesData[id-1].contentText}</div>)
  }


  return (
    <>
      <div className="tables">
        <div className={`table table-1 ${tableId===1 ? "active" : null}`} onClick={()=>{setTableId(1)}}>1</div>
        <div className={`table table-2 ${tableId===2 ? "active" : null}`} onClick={()=>{setTableId(2)}}>2</div>
        <div className={`table table-3 ${tableId===3 ? "active" : null}`} onClick={()=>{setTableId(3)}}>3</div>
      </div>
      <div className="contents">
        {renderTableContent(tableId)}
      </div>
    </>
  )
}

export default AboutTable
