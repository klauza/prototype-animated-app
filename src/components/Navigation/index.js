import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';


// platform navs
import PcNav from './PcNav';
import MobileNav from './MobileNav';


import { Wrapper, Navigation } from './NavbarCSS';


{/* <NavLink exact to={{pathname: "/information", state: -1}}>Information</NavLink>
<NavLink exact to={{pathname: "/vision", state: -2}}>Vision</NavLink> */}


// PC nav has more animations
const Navbar = ({ loc1, loc2 }) => {


  return (
    <Wrapper>
      <div className="top-section">
        <span>Title here</span>
      </div>
      <Navigation>
        <BrowserView><PcNav loc1={loc1} loc2={loc2} /></BrowserView>

        <MobileView><MobileNav loc1={loc1} loc2={loc2} /></MobileView>

      </Navigation>
    </Wrapper>
  )
}

export default Navbar