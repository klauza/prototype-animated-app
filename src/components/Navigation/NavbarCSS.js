import styled from 'styled-components';
import { animated } from 'react-spring'




export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 900;
  width: 100%; height: 30px;
  background: rgba(0,0,0,1);
  box-shadow: 0 1px 3px 0 black;
  .top-section{
    width: 1280px;
    margin: 0px auto;
    display: flex; flex-direction: row;
    justify-content: space-between;
    @media(max-width: 1280px){
      width: auto;
      padding: 0 15px;
    }
    span{
      line-height: 20px;
    }
`;
export const Navigation = styled.nav`
  height: 30px;
  width: 1280px;
  margin: 0px auto;

  color: #fff;
  background: #000;
  @media(max-width: 1280px){
    padding: 0 15px;
    width: auto;
  }
`;

export const LinkGroup = styled.div`
  width: 100%;
  display: flex; flex-direction: row;

  svg{
    width: auto; height: 30px;
    fill: #fff;
    &:hover{
      fill: #d4d4d4;
      cursor: pointer;
    }
  }

  ul{
    margin: 0 auto;
    width: 600px;
    display: flex; flex-direction: row;
    justify-content: space-around;
    align-items: center;

  }

  .drag-with-mouse{
    line-height: 30px;
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



export const ClickableAreaNextToMenu = styled(animated.div)`
  position: fixed;
  top: 0; bottom: 0;
  right: 0; 
  width: ${props => props.browser==="mobile" ? "40vw" : props.browser==="screen" && "75vw"};
  height: 100%;
  background: transparent;
`;
