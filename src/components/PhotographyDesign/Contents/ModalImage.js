import React, { useRef, useEffect, useState } from 'react';
import ReactDom from "react-dom";
import { StyledModal } from '../../Navigation/Modal/ModalCSS';

const modalRoot = document.getElementById("modal-root");

const ModalImage = ({ img, id, modalClass, modalSize, isOpen, onClose }) => {

  // const browser = isMobile ? "mobile" : isBrowser && "screen";

  const [fadeType, setFadeType] = useState(null);
  
  // const menuProps = useSpring({ transform: fadeType==="in" ? "translateX(0%)" : "translateX(-100%)" });

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
      className={`wrapper fade-${fadeType} ${modalClass}`}
      role="dialog"
      onTransitionEnd={transitionEnd}
    >

      {/* <button onClick={()=>console.log('should Close')}>CLOSE</button> */}
      
      <div onClick={handleClick} style={{zIndex: "1050", position: "fixed", top: "5%", bottom: "5%", width: "800px", height: "auto"}}>
        <img src={img} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
      </div>

      <div
        className={`background`}
        onMouseDown={handleClick}
        ref={background}
      />

    </StyledModal>,
    modalRoot
  );
}

export default ModalImage
