import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuIcon } from '../../media';

// redux
import { connect } from 'react-redux';
import { updt_animation_direction } from '../../actions/routesActions';
import history from '../../history';

// css
import { LinkGroup, ListItem } from './NavbarCSS';

const NavLinks = ({ toggleSideMenu, updt_animation_direction, loc1, loc2 }) => {


  const currentLocation = history.location.state;



  const handleUpdateAnimation = (id) => {
    // console.log('leaving location: ', currentLocation);
    // console.log('next location: ', id);

    if(id > currentLocation) {
      updt_animation_direction("to_left");
    } else{
      updt_animation_direction("to_right");
    }
    if(id === 0){

      history.push({
        pathname: '/',
        state: 0
      })
    }
    if(id === 1){

      history.push({
        pathname: '/web-development',
        state: 1
      })
    }
    if(id === 2){

      history.push({
        pathname: '/photography-design',
        state: 2
      })
    }
    if(id === 3){

      history.push({
        pathname: '/security',
        state: 3
      })
    }
  }

  return (
    <LinkGroup background={MenuIcon} >
      <div className="link-hamburger" onClick={toggleSideMenu} />
      

      <ul>
        <ListItem active={loc1===0 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(0)}>Home></ListItem>

        <ListItem active={loc1===1 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(1)} >Page 1</ListItem>

        <ListItem active={loc1===2 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(2)} >Page 2</ListItem>

        <ListItem active={loc1===3 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(3)} >Page 3</ListItem>
      </ul>
    </LinkGroup>
  )
}

export default connect(null, { updt_animation_direction })(NavLinks)