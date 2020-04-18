import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  color: #fff;
  display: grid;
  align-content: center;
  width: 100%; height: 100%;
  background: #d4d4d4;

  .body-top{
    width: 100%; 
    opacity: 1;
    /* transition: all 500ms ease; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 250px;
    align-content: center;
    justify-content: center;

    @media(max-width: 998px){
      grid-template-columns: 1fr;
    }


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