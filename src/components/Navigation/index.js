import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';

import ModalMenu from './ModalMenu';

// redux
import { connect } from 'react-redux';
import { update_tool_bool } from '../../actions/routesActions';

// platform navs
import PcNav from './PcNav';
import MobileNav from './MobileNav';

import { Wrapper, Navigation } from './NavbarCSS';


// PC nav has more animations
const Navbar = ({ update_tool_bool, loc1, loc2, general: { tools } }) => {
  // music
  // dark_mode

  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [blockFromToggle, setBlockFromToggle] = useState(false);

  // destructure redux data
  const { dark_mode, pc_mouse_move, music} = tools;

  React.useEffect(()=>{

  }, [dark_mode, pc_mouse_move, music])


  // top checkboxes
  // const [topCheckbox, setTopCheckbox] = useState({
  //   dark_mode: tools.dark_mode,
  //   pc_mouse_move: tools.pc_mouse_move,
  //   music: tools.music
  // });


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

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const bool = !tools[name];

    // update redux
    update_tool_bool({ ...tools, [name]: bool})
  }

  
  return (
    <>
      <ModalMenu blockFromToggle={blockFromToggle} visibility={visibility} hamburgerToggle={hamburgerToggle} toggleSideMenu={toggleSideMenu} />

      <Wrapper>

        <div className="top-section">
          <span>Title here</span>
          <div>Dark mode <input type="checkbox" name="dark_mode" checked={dark_mode} onChange={handleCheckboxChange} /></div>
          <BrowserView><div>Move website with mouse <input type="checkbox" name="pc_mouse_move" checked={pc_mouse_move} onChange={handleCheckboxChange} /></div></BrowserView>
        </div>

        <Navigation>

          <BrowserView><PcNav toggleSideMenu={toggleSideMenu} loc1={loc1} loc2={loc2} /></BrowserView>

          <MobileView><MobileNav toggleSideMenu={toggleSideMenu} loc1={loc1} loc2={loc2} /></MobileView>

        </Navigation>
      </Wrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, { update_tool_bool })(Navbar)
