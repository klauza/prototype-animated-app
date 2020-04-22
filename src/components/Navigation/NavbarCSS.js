import styled from 'styled-components';
import {animated} from 'react-spring'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 900;
  width: 100%; height: 40px;
  background: rgba(0,0,0,.25);
  .top-section{
    width: 1280px;
    margin: 0px auto;
    @media(max-width: 1280px){
      padding: 0 15px;
    }
    span{
      line-height: 20px;
    }
`;
export const Navigation = styled.nav`
  height: 40px;
  width: 1280px;
  margin: 0px auto;

  color: #fff;
  background: lightblue;
  @media(max-width: 1280px){
    padding: 0 15px;
    width: auto;
  }
`;

export const LinkGroup = styled.div`
  width: 100%;
  display: flex; flex-direction: row;

  .link-hamburger{
    width: 50px; height: 40px;
    background: url(${props => props.background});
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover{
      border: 1px solid red;
    }
  }

  ul{
    width: 100%;
    display: flex; flex-direction: row;
    justify-content: space-around;
    align-items: center;

  }
`;

export const ListItem = styled.li`
  transition: all 500ms ease;
  list-style: none;
  color: ${props => props.active};
  cursor: pointer;
`;


// MODAL MENU
export const ModalHolder = styled(animated.div)`
  // height: 100vh;
  // width: 100vw;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  z-index: 999;
  display: ${props => props.vis};
`;

export const ModalMenuContainer = styled(animated.div)`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; 
  width: ${props => props.browser==="mobile" ? "50vw" : props.browser==="screen" && "25vw"};
  height: 100%;
  background: #d4d4d4;
  z-index: 999;
  
`;

export const ModalNextToMenu = styled(animated.div)`
  position: fixed;
  top: 0; bottom: 0;
  right: 0; 
  width: ${props => props.browser==="mobile" ? "50vw" : props.browser==="screen" && "75vw"};
  height: 100%;
  background: transparent;
`;
