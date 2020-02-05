import React, {useRef} from 'react';
import { AbsoluteWrapper } from './reusable';
import styled from 'styled-components';
const ExternalWrapper = styled.div``;
const Wrapper = styled.div`
  color: #fff;

  .height-none{
    height: 0vh!important;
    /* opacity: 0!important; */
    background: grey;
    transition: all 500ms ease;
    pointer-events: none;
  }
  .toggle-opacity{
    opacity: 0!important;
    /* transition: opacity 500ms ease; */
  }

  .body-bottom{
    height: 15vh;
    background: #000;
  }

  .body-top{
    height: 85vh;
    opacity: 1;

    background: grey;
    transition: all 500ms ease;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    align-content: center;
    align-items: center;
    &__developer{
      /* height: 100%; */
      opacity: 1;
      transition: opacity 400ms ease;
    }
    &__SVG{
      opacity: 1;
      transition: opacity 400ms ease;

    }
}
`;


const Home = () => {

  const SquashRef = useRef();
  const bodyTopDev = useRef();
  const bodyTopSvg = useRef();

  const startSquashing = () => {
    SquashRef.current.childNodes[0].classList.toggle('height-none');
    // console.log(SquashRef.current.childNodes[0]);
    bodyTopDev.current.classList.toggle('toggle-opacity');
    bodyTopSvg.current.classList.toggle('toggle-opacity');


    // toggle arrow

  }

  return (
    <AbsoluteWrapper>
      <ExternalWrapper>
      <Wrapper ref={SquashRef}>

        <div className="body-top">
          <div className="body-top__developer" ref={bodyTopDev}>
              <p>KLAUZA</p>
              <p>Portfolio</p>
              <p>Web Developer</p>
          </div>
          <div className="body-top__SVG" ref={bodyTopSvg}>SVG</div>
        </div>

        <div className="body-bottom">
          <span>15vh</span> <button onClick={startSquashing}>Squash</button>
        </div>

      </Wrapper>

      <Wrapper>
        <div style={{height: '85vh'}}>second 85vh</div>
      </Wrapper>

      </ExternalWrapper>
    </AbsoluteWrapper>
  )
}

export default Home
