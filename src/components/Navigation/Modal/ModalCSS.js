import styled from "styled-components";
import { animated } from 'react-spring';

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.25s;
  z-index: 2000;

  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.25s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.25s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
`;

export const ModalMenuContainer = styled(animated.div)`
  

  position: fixed;
  top: 0; bottom: 0;
  left: 0; 


  width: ${props => props.browser==="mobile" ? "60vw" : props.browser==="screen" && "25vw"};
  
  height: 100%;
  background: #d4d4d4;
  z-index: 1050;

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
        // pointer-events: ${props => props.pointer_event};
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