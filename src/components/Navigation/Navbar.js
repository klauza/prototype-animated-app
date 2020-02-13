import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background: #000;
`;
const Navigation = styled.nav`
  color: #fff;
  background: #000;
  height: 50px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Navigation>
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
      </Navigation>
    </Wrapper>
  )
}

export default Navbar