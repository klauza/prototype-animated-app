import styled from 'styled-components';
import { animated } from 'react-spring';

export const HeroDiv = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(100, 160, 200 ,1);
  position: relative;
  div{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  h1{
    // position: absolute;
    font-family: Verdana;
    font-size: 10em;
    color: #000;
    // top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  color: #000;
  background: #d4d4d4;
  // margin-top: 50px;
  // margin-bottom: 50px;
  padding-bottom: 100px;
  .cat-h1{
    text-align: center;
    padding-top: 50px;
    padding-bottom: 25px;
  }

  .scrollable{
    height: 100vh; 
    overflow-y: auto;
  }

  .div-container{
    display: flex; flex-direction: row;
    flex-basis: auto;
    height: ${props => props.isLegit !== null ? "40px" : "100px"};
    position: ${props => props.isLegit !== null ? "sticky" : "none"};
    top: 30px;
    transition: all 0.25s ease;
    z-index: 999;

    .section{
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: auto;
      width: 100%; height: 100%;
      
      transition: all .25s ease;
      filter: brightness(1);

      &.shaded{
        filter: brightness(0.5);
      }
      &.flex{
        flex-shrink: 0.325;
      }
    }


  }
`;

export const AnimatedContent = styled(animated.div)`
  width: 100%;
  // margin-top: 100px;
  position: absolute;
  top: 0;
`;