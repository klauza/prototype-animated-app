import styled from 'styled-components';
import { animated } from 'react-spring';

export const ExternalWrapper = styled.div`
  position: relative;
`;

export const AboutButton = styled(animated.div)`
  position: absolute;
  left: 40px;
  transform: translateY(-50%);

  width: 40px;
  height: 80px;
  background: yellow;
  z-index: 100;
  
  button{
    width: 100%;
    height: 100%;
  }
`;
export const ContactButton = styled(animated.div)`
  position: absolute;
  left: 80px;
  transform: translateY(-50%);

  width: 40px;
  height: 80px;
  background: green;
  z-index: 100;

  button{
    width: 100%;
    height: 100%;
  }
`;