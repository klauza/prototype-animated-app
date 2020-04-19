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

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 250px;
    align-content: center;
    justify-content: center;

    @media(max-width: 998px){
      grid-template-columns: 1fr;
    }


    &__developer{
      border: 1px solid blue;
    }
    &__SVG{
      border: 1px solid red;
    }
  }
`;