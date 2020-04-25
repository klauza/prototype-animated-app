import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { isBrowser, isMobile } from 'react-device-detect';
import { useSpring } from 'react-spring';
import { AppsIcon } from '../../../media';

// styled
import { StyledModal, ModalMenuContainer } from "./ModalCSS";

const modalRoot = document.getElementById("modal-root");



const Modal = ({ id, modalClass, modalSize, isOpen, onClose }) => {

  const browser = isMobile ? "mobile" : isBrowser && "screen";

  const [fadeType, setFadeType] = useState(null);
  
  const menuProps = useSpring({ transform: fadeType==="in" ? "translateX(0%)" : "translateX(-100%)" });

  const background = useRef();

  useEffect(()=>{
    window.addEventListener("keydown", onEscKeyDown, false);
    setTimeout(() => setFadeType("in"), 0);
    return () => {
      window.removeEventListener("keydown", onEscKeyDown, false);
    };
  }, [])

  useEffect(()=>{
    if (!isOpen) {
      setFadeType("out")

    }
  }, [fadeType])



  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") {
      onClose();
    }
  };

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType("out")
  };

  const handleClick = () => {
    setFadeType("out")
  };

    return ReactDom.createPortal(
      <StyledModal
        id={id}
        className={`wrapper ${"size-" + modalSize} fade-${fadeType} ${modalClass}`}
        role="dialog"
        modalSize={modalSize}
        onTransitionEnd={transitionEnd}
      >
        <ModalMenuContainer
          style={menuProps}
          browser={browser}
        >
          <div className="grid-menu left-column">
            <div onClick={handleClick} className="social-icons">[f]</div>
            
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
              <NavLink onClick={handleClick} exact to={{pathname: "/information", state: -1}}>Information</NavLink>
              <NavLink onClick={handleClick} exact to={{pathname: "/vision", state: -2}}>Vision</NavLink> 
              <NavLink onClick={handleClick} exact to={{pathname: "/faq", state: -3}}>Have questions? <br/>See FAQ</NavLink> 
              <NavLink onClick={handleClick} exact to={{pathname: "/tac-pp", state: -4}}>Terms and conditions <br/>Privacy Policy</NavLink> 
            </div>
            <div className="bottom-desc">
              <span>Music on/off</span>
              <span>Dark mode on/off</span>
              <span>copyright ©</span>
            </div> 
          </div>
        </ModalMenuContainer>  

      
        <div
          className={`background`}
          onMouseDown={handleClick}
          ref={background}
        />
      </StyledModal>,
      modalRoot
    );
}

export default Modal;
