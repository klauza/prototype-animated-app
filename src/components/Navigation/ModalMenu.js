import React from 'react';
import { useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';

import { ModalHolder, ClickableAreaNextToMenu, ModalMenuContainer } from './NavbarCSS';
import { isBrowser, isMobile } from 'react-device-detect';

// media / icons
import { AppsIcon } from '../../media';

const ModalMenu = ({ visibility, hamburgerToggle, toggleSideMenu }) => {

  const browser = isMobile ? "mobile" : isBrowser && "screen";

  const modalProps = useSpring({ opacity: hamburgerToggle? 1 : 0 });

  const menuProps = useSpring({ opacity: hamburgerToggle? 1 : 0, transform: hamburgerToggle ? "translateX(0%)" : "translate(-100%)" });




  return (
    <ModalHolder vis={visibility ? "block" : "none"} style={modalProps} >
      <ModalMenuContainer style={menuProps} browser={browser}> 
        <div className="grid-menu left-column">
          <div className="social-icons">[f]</div>
          <div className="tool-pages__icons">
            <div><img src={AppsIcon} /></div>
            <div><img src={AppsIcon} /></div>
            <div><img src={AppsIcon} /></div>
          </div>
          <div className="bottom-icons">
            <div><img src={AppsIcon} /></div>
            <div><img src={AppsIcon} /></div>
            <div><img src={AppsIcon} /></div>
          </div>
        </div>

        <div className="grid-menu right-column">
          <div className="logo-icon"><span>LOGO</span></div>
          <div className="tool-pages__links">
            <NavLink exact to={{pathname: "/information", state: -1}}>Information</NavLink>
            <NavLink exact to={{pathname: "/vision", state: -2}}>Vision</NavLink> 
            <NavLink exact to={{pathname: "/faq", state: -3}}>FAQ</NavLink> 
          </div>
          <div className="bottom-desc">
            <span>Author</span>
            <span>The page is written in React</span>
            <span>copyright ©</span>
          </div> 

          <button onClick={toggleSideMenu}>Exit modal</button>
        </div>
        
      </ModalMenuContainer>  

      <ClickableAreaNextToMenu onClick={toggleSideMenu} browser={browser}/>

    </ModalHolder>
  )

}

export default ModalMenu