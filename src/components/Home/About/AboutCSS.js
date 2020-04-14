import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

export const AboutMe = styled(animated.div)`
  color: black;
  color: ${props => props.i ? "orange" : "black"};
  pointer-events: ${props => props.i ? "auto" : "none"};
  
  .about-animated{
    display: flex; flex-direction: column;
    width: 100%;
  
    .block-1{
      border: 1px solid #fff;
      background: orange;
      width: auto;
      height: 50px;
    }
    .block-2{
      border: 1px solid #fff;
      background: red;
      width: auto;
      height: 50px;
    }
  }


`;
// height: 100vh;