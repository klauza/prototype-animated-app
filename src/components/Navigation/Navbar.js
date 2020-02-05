import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={navStyle}>
      <div>NAVBAR</div>
      <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/page-one">Page 1</NavLink>
        <NavLink exact to="/page-two">Page 2</NavLink>
        <NavLink exact to="/page-three">Page 3</NavLink>
      </div>
    </div>
  )
}

export default Navbar

const navStyle = {
  color: '#fff',
  background: '#000',
  height: '50px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
}