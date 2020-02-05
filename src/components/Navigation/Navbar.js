import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={navStyle}>
      <div>NAVBAR</div>
      <div>

        <NavLink exact 
          to={{
            pathname: "/",
            state: 0
          }}
        >Home</NavLink>

        <NavLink exact 
          to={{
            pathname: "/page-one",
            state: 1
          }}
        >Page 1</NavLink>

        <NavLink exact 
          to={{
            pathname: "/page-two",
            state: 2
          }}
        >Page 2</NavLink>

        <NavLink exact 
          to={{
            pathname: "/page-three",
            state: 3
          }}
        >Page 3</NavLink>

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