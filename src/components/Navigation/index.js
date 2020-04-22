import React, { useRef, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';

import ModalMenu from './ModalMenu';

// platform navs
import PcNav from './PcNav';
import MobileNav from './MobileNav';


import { Wrapper, Navigation } from './NavbarCSS';


{/* <NavLink exact to={{pathname: "/information", state: -1}}>Information</NavLink>
<NavLink exact to={{pathname: "/vision", state: -2}}>Vision</NavLink> */}


// PC nav has more animations
const Navbar = ({ loc1, loc2 }) => {

  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [blockFromToggle, setBlockFromToggle] = useState(false);

  // const bgLayer = useRef();

  const toggleSideMenu = () => {
    if(!blockFromToggle){
      setBlockFromToggle(true);
      setHamburgerToggle(prevState => !prevState);

      if(visibility===false) setVisibility(true);
  
      if(visibility===true){
        setTimeout(()=>{
          setVisibility(false);
        }, 750)
      }
     
      // remove block 
      setTimeout(()=>{
        setBlockFromToggle(false);
      }, 750)
    }


    
  }

  return (
    <>
      <ModalMenu visibility={visibility} hamburgerToggle={hamburgerToggle} toggleSideMenu={toggleSideMenu} />

      <Wrapper>

        <div className="top-section">
          <span>Title here</span>
        </div>

        <Navigation>

          <BrowserView><PcNav toggleSideMenu={toggleSideMenu} loc1={loc1} loc2={loc2} /></BrowserView>

          <MobileView><MobileNav toggleSideMenu={toggleSideMenu} loc1={loc1} loc2={loc2} /></MobileView>

        </Navigation>
      </Wrapper>
    </>
  )
}

export default Navbar