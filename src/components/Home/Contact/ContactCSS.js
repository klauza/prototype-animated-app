
import styled from 'styled-components';
import { animated } from 'react-spring';

export const ContactMe = styled.div`
  pointer-events: ${props => props.i ? "auto" : "none"};
  width: 100%; height: 100%;  
  background: orange;
  // position: absolute; top: 0;
`;