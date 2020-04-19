import { animated } from 'react-spring';
import styled from 'styled-components';


export const Header = styled(animated.div)`

`;

export const BackButton = styled.button`
  position: absolute;
  left: 50%; transform: translateX(-50%);
  width: 90px; height: 40px; line-height: 40px;

  background: orange; color: #000; font-weight: 700;
`;

export const ContentMain = styled.div`
  background: lightblue;
  width: 100%; height: 100%;

  position: relative;

  .scrollable{
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 100px;
  }
`;
export const ProjectsWrapper = styled.div`
  height: 100%;
  width: 100%;

  .project__container{
    min-height: 400px; width: 100%;
    border: 1px solid black;

    &--title{

    }

    &--desc{

    }
  }
`;

export const HeroMain = styled.div`
  background: gray;
  width: 100%; height: 100%;
`;