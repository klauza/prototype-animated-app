import styled from 'styled-components';
import { animated } from 'react-spring'

export const Wrapper = styled(animated.div)`
  color: #fff;
  display: grid;
  align-content: center;
  pointer-events: ${props => props.i ? "auto" : "none"};
  width: 100%; height: 100%;
  background: #d4d4d4;
  // position: absolute; top: 0;
  transform: ${props => props.i ? "translateY(0px)" : "translateY(-1000px)"};

  .body-top{
    width: 100%; 
    opacity: 1;
    /* transition: all 500ms ease; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    align-content: center;
    justify-content: center;


    &__developer{
      /* transition: opacity 1000ms ease; */
      border: 1px solid blue;
      // align-self: center;
      // justify-self: center;
    }
    &__SVG{
      /* transition: opacity 1000ms ease; */
      border: 1px solid red;
      transform: translateY(50px);
    }
  }
`;