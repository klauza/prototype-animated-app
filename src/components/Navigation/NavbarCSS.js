import styled from 'styled-components';
import { animated } from 'react-spring'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 900;
  width: 100%; height: 40px;
  background: rgba(0,0,0,.25);
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
  width: ${props => props.browser==="mobile" ? "60vw" : props.browser==="screen" && "25vw"};
  height: 100%;
  background: #d4d4d4;
  z-index: 999;

  display: grid;
  grid-template-columns: 1fr 4fr;

  .grid-menu{
    color: white;
    height: 100%;
    display: grid;
    grid-template-rows: 15% 70% 15%;
    justify-items: center;
    padding: 10px 0;
  }

  .left-column{
    
    z-index: 2;
    background: #3B3B3B;
    
    .social-icons{

    }
    .tool-pages__icons{
      display: flex; flex-direction: column;
      div{
        width: auto; 
        height: 40px;
        img{
          transform: scale(0.7);
          width: 100%; height: 100%; object-fit: contain;
        }
      }
    }
    .bottom-icons{
      display: flex; flex-direction: column;
      align-self: center;
      div{
        width: 30px; 
        height: 30px;
        img{
          transform: scale(0.7);
          width: 100%; height: 100%; object-fit: contain;
        }
      }
    }

  }

  .right-column{
    z-index: 1;
    background: #777777;
    box-shadow: 10px 0px 12px 0px rgba(0,0,0,0.6);
    

    .logo-icon{
      width: 100%;
      display:grid;
      justify-items: center;

      span{
        font-size: 3em;
      }
      &::after{
        content: '';
        display: block;
        width: 70%; height: 1px;
        background: #fff;
        margin: auto auto 10px;
      }
    }

    .tool-pages__links{
      width: 100%;
      display: flex; flex-direction: column;
      a{
        pointer-events: ${props => props.pointer_event};
        line-height: 40px;
        text-align: center;
        // border: 1px solid red;
        transition all 300ms ease;
        &:hover{
          background: rgba(0,0,0,.25);
        }
      }
    }

    .bottom-desc{
      width: 100%;
      display: flex; flex-direction: column;
      align-self: center;

      span{
        height: 30px;
        text-align: center;
      }
    }


  }
`;

export const ClickableAreaNextToMenu = styled(animated.div)`
  position: fixed;
  top: 0; bottom: 0;
  right: 0; 
  width: ${props => props.browser==="mobile" ? "40vw" : props.browser==="screen" && "75vw"};
  height: 100%;
  background: transparent;
`;
