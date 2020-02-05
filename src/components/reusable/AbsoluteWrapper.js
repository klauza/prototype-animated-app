import React from 'react'

const AbsoluteWrapper = ({ children }) => {
  return (
    <div style={absolution}>
      {children}
    </div>
  )
}

const absolution = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}
export default AbsoluteWrapper
