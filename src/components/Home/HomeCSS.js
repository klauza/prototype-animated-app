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
