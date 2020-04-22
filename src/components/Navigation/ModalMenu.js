import React from 'react';
import { useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';

import { ModalHolder, ClickableAreaNextToMenu, ModalMenuContainer } from './NavbarCSS';
import { isBrowser, isMobile } from 'react-device-detect';

// media / icons
import { AppsIcon } from '../../media';

const ModalMenu = ({ blockFromToggle, visibility, hamburgerToggle, toggleSideMenu }) => {

  const browser = isMobile ? "mobile" : isBrowser && "screen";

  const modalProps = useSpring({ opacity: hamburgerToggle? 1 : 0 });

  const menuProps = useSpring({ opacity: hamburgerToggle? 1 : 0, transform: hamburgerToggle ? "translateX(0%)" : "translate(-100%)" });


  return (
    <ModalHolder vis={visibility ? "block" : "none"} style={modalProps} >
      <ModalMenuContainer style={menuProps} browser={browser} pointer_event={blockFromToggle ? "none" : "default"}> 
        <div className="grid-menu left-column">
          <div className="social-icons">[f]</div>
          <div className="tool-pages__icons">
            <div><img src={AppsIcon} alt="" /></div>
            <div><img src={AppsIcon} alt="" /></div>
            <div><img src={AppsIcon} alt="" /></div>
          </div>
          <div className="bottom-icons">
            <div><img src={AppsIcon} alt="" /></div>
            <div><img src={AppsIcon} alt="" /></div>
            <div><img src={AppsIcon} alt="" /></div>
          </div>
        </div>

        <div className="grid-menu right-column">
          <div className="logo-icon"><span>LOGO</span></div>
          <div className="tool-pages__links">
            <NavLink onClick={toggleSideMenu}exact to={{pathname: "/information", state: -1}}>Information</NavLink>
            <NavLink onClick={toggleSideMenu}exact to={{pathname: "/vision", state: -2}}>Vision</NavLink> 
            <NavLink onClick={toggleSideMenu}exact to={{pathname: "/faq", state: -3}}>Have questions? <br/>See FAQ</NavLink> 
            <NavLink onClick={toggleSideMenu}exact to={{pathname: "/tac-pp", state: -4}}>Terms and conditions <br/>Privacy Policy</NavLink> 
          </div>
          <div className="bottom-desc">
            <span>Music on/off</span>
            <span>Dark mode on/off</span>
            <span>copyright ©</span>
          </div> 
        </div>
        
      </ModalMenuContainer>  

      <ClickableAreaNextToMenu 
        browser={browser} 
        onClick={toggleSideMenu} 
        onMouseEnter={()=>{document.getElementsByTagName("body")[0].style.cursor="not-allowed"}} 
        onMouseLeave={()=>{document.getElementsByTagName("body")[0].style.cursor="default"}} 
      />

    </ModalHolder>
  )

}

export default ModalMenu