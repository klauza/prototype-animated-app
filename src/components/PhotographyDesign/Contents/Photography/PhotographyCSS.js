import styled from 'styled-components';
import { animated } from 'react-spring';

export const AnimatedPhotoshop = styled.div`

  margin: 0;
  padding: 0;
  background: lightblue;
  // position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  user-select: none;
  overscroll-behavior-x: contain;

  & > div {
    
    position: absolute;
    width: 100vw;
    height: 100vh;
    // background: red;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > div {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 45vh;
    max-width: 300px;
    height: 85vh;
    max-height: 570px;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }
`;