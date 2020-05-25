import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';

// modal
import Modal from './Modal'

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

  // destructure redux data
  const { 
    // dark_mode, 
    // music,
    pc_mouse_move 
  } = tools;


  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  }

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const bool = !tools[name];

    // update redux
    update_tool_bool({ ...tools, [name]: bool})
  }

  
  return (
    <>
      {isModalOpen && (
        <Modal
          id="modal"
          isOpen={isModalOpen}
          onClose={toggleModal}
        />
      )}

      <Wrapper>

        <div className="top-section">
          <span>Title here</span>
          {/* <div>Dark mode <input type="checkbox" name="dark_mode" checked={dark_mode} onChange={handleCheckboxChange} /></div> */}
          <BrowserView><div>Enable mouse drag <input type="checkbox" name="pc_mouse_move" checked={pc_mouse_move} onChange={handleCheckboxChange} /></div></BrowserView>
        </div>

        <Navigation>

          <BrowserView>
            <PcNav 
              toggleModal={toggleModal} 
              loc1={loc1} 
              loc2={loc2} 
            />
          </BrowserView>

          <MobileView>
            <MobileNav 
              toggleModal={toggleModal} 
              loc1={loc1} 
              loc2={loc2} 
            />
          </MobileView>

        </Navigation>
      </Wrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, { update_tool_bool })(Navbar)
