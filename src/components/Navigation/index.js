import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';

import ModalMenu from './ModalMenu';

// platform navs
import PcNav from './PcNav';
import MobileNav from './MobileNav';

import { Wrapper, Navigation } from './NavbarCSS';


// PC nav has more animations
const Navbar = ({ loc1, loc2 }) => {

  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [blockFromToggle, setBlockFromToggle] = useState(false);

  // top checkboxes
  const [topCheckbox, setTopCheckbox] = useState({
    dark_mode: false,
    pc_mouse_move: false
  });


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

  const handleInputChange = (e) => {
    const name = e.target.name;
    const bool = topCheckbox[name];

    setTopCheckbox({
      ...topCheckbox, 
      [e.target.name]: !bool })
  }

  
  return (
    <>
      <ModalMenu blockFromToggle={blockFromToggle} visibility={visibility} hamburgerToggle={hamburgerToggle} toggleSideMenu={toggleSideMenu} />

      <Wrapper>

        <div className="top-section">
          <span>Title here</span>
          <div>Dark mode <input type="checkbox" name="dark_mode" checked={topCheckbox.dark_mode} onChange={handleInputChange} /></div>
          <BrowserView><div>Move website with mouse <input type="checkbox" name="pc_mouse_move" checked={topCheckbox.pc_mouse_move} onChange={handleInputChange} /></div></BrowserView>
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