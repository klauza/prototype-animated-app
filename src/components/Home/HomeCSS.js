import styled from 'styled-components';

export const ExternalWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  color: #fff;

  .body-top{
    /* height: 85vh; */
    width: 100%;
    opacity: 1;
    /* position: absolute; */
    background: grey;
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

export const AboutMe = styled.div`
  color: black;
  background: lightcyan;
  display: flex; flex-direction: column;
  height: 100vh;
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

`;