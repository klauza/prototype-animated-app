
import styled from 'styled-components';
import { animated } from 'react-spring';

export const ContactMe = styled(animated.div)`
  pointer-events: ${props => props.i ? "auto" : "none"};
  width: 100%;
  padding-top: 150px;  
  z-index: 12;
`;