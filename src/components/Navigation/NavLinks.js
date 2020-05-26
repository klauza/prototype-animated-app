import React from 'react';
import { isBrowser } from 'react-device-detect';

// import { MenuIcon } from '../../media';
import { Hamburger } from '../../Icons';

// redux
import { connect } from 'react-redux';
import { updt_animation_direction } from '../../actions/routesActions';
import history from '../../history';

// css
import { LinkGroup, ListItem } from './NavbarCSS';

const NavLinks = ({ handleCheckboxChange, pc_mouse_move, toggleModal, toggleSideMenu, updt_animation_direction, loc1, loc2 }) => {


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
        pathname: '/primo',
        state: 1
      })
    }
    if(id === 2){

      history.push({
        pathname: '/secundo',
        state: 2
      })
    }
    if(id === 3){

      history.push({
        pathname: '/tertio',
        state: 3
      })
    }
  }

  return (
    <LinkGroup>
      <Hamburger onClick={toggleModal} />
      

      <ul>
        <ListItem active={loc1===0 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(0)}>Home</ListItem>

        <ListItem active={loc1===1 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(1)} >Primo</ListItem>

        <ListItem active={loc1===2 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(2)} >Secundo</ListItem>

        <ListItem active={loc1===3 ? "white" : "grey"} onClick={()=>handleUpdateAnimation(3)} >Tertio</ListItem>
      </ul>

      {isBrowser && <div className="drag-with-mouse"><label htmlFor="pc_mouse_move">Drag app with mouse</label><input type="checkbox" id="pc_mouse_move" name="pc_mouse_move" checked={pc_mouse_move} onChange={handleCheckboxChange} /></div>}


    </LinkGroup>
  )
}

export default connect(null, { updt_animation_direction })(NavLinks)