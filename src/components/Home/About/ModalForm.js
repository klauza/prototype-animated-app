import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

const Wrapper = styled(animated.div)`
  z-index: 999;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: grey;
  border: 1px solid #fff;
  transform-origin: center center;
`;

const ModalForm = ({modalOpen}) => {

  const props = useSpring({ 
    height: modalOpen ? "500px" : "0px",
    width: modalOpen ? "500px" : "0px",
    opacity: modalOpen ? "1" : "0"
  });

  return (
    <Wrapper style={props}>
      MODAL
    </Wrapper>
  )
}

export default ModalForm
