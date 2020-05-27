import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;
  color: #fff;
  background: #d4d4d4;
  padding-bottom: 100px;
  h1{
    text-align: center;
  }

  .swiper-container{
    margin: 25px 2.5px;
    height: 300px;
    background: white;
  }
  .scrollable{
    height: 100vh; 
    overflow-y: auto;
  }

  .swiper-slide{
    &>*{
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
    }
    h1{
      z-index: 5;
      color: black;
      left: 80%;
    }
    img{
      z-index: 4;

    }
  }
`;

export const Header = styled.div`
  height: 400px;
  background: black;
  position: relative;

  .heading-h1{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  h1{
    font-family: Verdana;
    font-size: 6em;
    transform: translate(-50%, -50%);
  }
`;