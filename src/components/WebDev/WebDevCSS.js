import { animated } from 'react-spring';
import styled from 'styled-components';


export const Header = styled(animated.div)`
  h1{
    text-align: center;
  }
`;

export const BackButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 60px;
  left: 50%; transform: translateX(-50%);
  width: 90px; height: 40px; line-height: 40px;

  background: orange; color: #000; font-weight: 700;
`;

export const ContentMain = styled.div`
  background: yellowgreen;
  width: 100% ;height: 100%; 
  position: relative;


  .scrollable{
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 100px;
  }
`;

export const Wrapper = styled.div`
padding: 0 7.5px;
  width: 1280px;
  margin: 0 auto;
  padding-top: 60px;
  
  @media(max-width: 998px){
    width: auto;
  }

`;

export const HeroTopImage = styled.div`
  width: 100%;
  height: 500px;
  background: url(${props => props.bg}) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  .hero_top_image--content{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    h1{
      color: #0FF;
    }
  }


  @media(max-width: 998px){
    height: 350px;
  }


`;

export const ProjectsWrapper = styled.div`
  height: 100%;
  width: 100%;

  .project__container{
    display: flex; flex-direction: row;
    height: auto;

    width: 100%;
    border: 1px solid black;

    &--image{
      height: 100px;
      width: 100px;
      img{
        height: 100%; width: 100%;
        object-fit: cover;
      }
    }

    &--info{
      h3{
        color: red;
      }
    }

    &--btns{

    }
  }
`;

export const HeroMain = styled.div`
  background: gray;
  width: 100%; height: 100%;
`;