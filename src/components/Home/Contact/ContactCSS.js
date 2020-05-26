
import styled from 'styled-components';
// import { animated } from 'react-spring';

export const ContactMe = styled.div`
  // background: #d4d4d4;
  max-width: 1280px;
  margin: 0 auto;
  padding: 150px 2.5px 0;

  width: 100%; height: 100vh;  

  .content{
    display: flex;
    flex-direction: column;
    width: 100%;

    svg{
      width: 100%;
      height: 350px;
    }
    &>div{
      text-align: center;
      a{
        color: black;
        text-decoration: underline;
        font-size: 18px;
      }
    }
  }
`;