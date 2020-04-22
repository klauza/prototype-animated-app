import React from 'react';
import {useSpring, animated} from 'react-spring';

import { ModalHolder, ClickableAreaNextToMenu, ModalMenuContainer } from './NavbarCSS';
import { isBrowser, isMobile } from 'react-device-detect';

const ModalMenu = ({ visibility, hamburgerToggle, toggleSideMenu }) => {
  // width for pc: 20vw
  // width for mobile: 50vw;
  const browser = isMobile ? "mobile" : isBrowser && "screen";

  // const props = useSpring({opacity: hamburgerToggle ? 1 : 0})
  const menuProps = useSpring({ opacity: hamburgerToggle? 1 : 0 });

  // const propsBackLayer = useSpring({opacity: visibility ? 1 : 0 })


  // let vis = visibility && hamburgerToggle ? console.log('true, display true') : console.log('false, timeout and display none');
  // console.log(vis);

  return (
    <ModalHolder vis={visibility ? "block" : "none"} style={menuProps} >
      <ModalMenuContainer style={menuProps} browser={browser}> 
        modal 
        <button onClick={toggleSideMenu}>Exit modal</button>
      </ModalMenuContainer> 

      <ClickableAreaNextToMenu onClick={toggleSideMenu} browser={browser}/>

    </ModalHolder>
  )

}

export default ModalMenu