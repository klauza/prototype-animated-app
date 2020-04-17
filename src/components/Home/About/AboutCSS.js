import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  background: white;
`;

export const AboutMe = styled(animated.div)`
  max-width: 1280px;
  width: auto;
  margin: 0 auto;
  padding: 0 2.5px;

  pointer-events: ${props => props.i ? "auto" : "none"};
  
  .about-animated{
    display: grid; grid-template-rows: 40vh 60vh;
    width: 100%;

  
    .top-part{
      .svg-div{
        width: 200px;
        margin-left: auto;
        svg{
          width: 200px; height: 200px;
        }
      }
    }

    .bot-part{
      display: flex; flex-direction: column;
      
      .tables{
        width: 100%;
        height: 50px;
        display: flex; flex-direction: row;
        .table-1, .table-2, .table-3{
          border: 1px solid gray;
          width: 100%;
          &.active{
            background: red;
          }
        }
      }

      .contents{
        width: 100%; height: 100%;
        padding: 5px;
        background: #d4d4d4;

        .content-1, .content-2, .content-3{
          color: #000;
          font-size: 2.5em;
        }
      }
    }

  }


`;
// height: 100vh;