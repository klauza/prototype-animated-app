import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
 
  position: relative;
  width: 100%; height: 100%;
  background: #d4d4d4;
  padding: 0 7.5px;
  @media(min-width:1280px){
    padding: 0 100px;
  }

  .hero__contaier{
    width: 100%;
    position: absolute;
    top: 50%; left: 50%;
    opacity: 1;

    svg{
      width: 100%;
      height: 250px;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
    }

    // h1{
    //   font-family: Verdana;
    //   font-size: 7.5em;
    //   color: #000;
    //   top: 50%; left: 50%;
    //   transform: translate(-50%, -50%);
    // }

  }


`;