import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { isMobile } from "react-device-detect";

// redux
import { connect } from 'react-redux';
import { updt_animation_direction } from '../../actions/routesActions';
// redux


const Btn = styled.button`
  width: 100px;
  height: 40px;

  display: block;
  border: 1px solid red;

  position: absolute;
  right: 0; 

  top: ${props => props.isAndroid ? "50%" : "0%"};
  transform: ${props => props.isAndroid ? "translate(0, -50%)" : "translate(0, 0)"};
`;

// parent of this component must be relative
const BackButton = ({display, text, icon, updt_animation_direction}) => {
  // Back home button
  const backFunc = () => {
    const direction = display === "right" ? "to_left" : display === "left" && "to_right";
    // console.log(direction);
    updt_animation_direction(direction);

    history.push({
      pathname: '/',
      state: 0
    })
  }
  return (
    <Btn isAndroid={isMobile} onClick={backFunc} display={display}>
      {text}
      {icon && icon}
    </Btn>
  )
}

export default connect(null, { updt_animation_direction })(BackButton)