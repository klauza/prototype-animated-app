import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

export const Wrapper = styled(animated.div)`
  color: #fff;
  
  .body-top{
    /* height: 100vh; */
    width: 100%;
    opacity: 1;
    /* position: absolute; */
    /* transition: all 500ms ease; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    align-content: center;
    align-items: center;

    /* pointer-events: none; */
    &__developer{
      /* transition: opacity 1000ms ease; */
    }
    &__SVG{
      /* transition: opacity 1000ms ease; */

    }
  }
`;