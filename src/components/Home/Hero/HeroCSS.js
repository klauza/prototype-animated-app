import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  color: #fff;
  display: grid;
  align-content: center;
  width: 100%; height: 100%;
  background: #d4d4d4;
  padding: 0 7.5px;
  @media(min-width:1280px){
    padding: 0 100px;
  }

  .hero__contaier{
    width: 100%; 
    opacity: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    align-items: center;
    justify-content: center;

    @media(max-width: 998px){
      grid-template-columns: 1fr;
    }

    &--text{
      color: red;
      border: 1px solid blue;
    }
    &--image{
      border: 1px solid red;
    }

    @media(max-width: 998px){
      &--text{
        text-align: center;
      }
    }
  }


`;