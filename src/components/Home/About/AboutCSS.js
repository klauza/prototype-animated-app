import styled from 'styled-components';
// import { animated } from 'react-spring';


export const AboutMe = styled.div`
  background: transparent;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5px;
  width: 100%; height: 100%;

  

  .color-0{
    color: green;
  }
  .color-1{
    color: red;
  }
  .color-2{
    color: orange;
  }

  
  .about__content{
    display: grid; grid-template-rows: 40vh 60vh;
    width: 100%;

  
    &--top{
      padding-top: 30px;
      position: relative;



      h1{

      }
      .paragraph{
      }

      .svg{
        width: 200px;
        margin-left: auto;
        z-index: 2;
        svg{
          width: 200px; height: 200px;
          position: absolute;
          top: 0;
        }
      }
    }

    &--bottom{
      display: flex; flex-direction: column;
      z-index: 3;
      
      .tables{
        width: 100%;
        height: 30px;
        display: flex; flex-direction: row;
        .table-1, .table-2, .table-3{
          cursor: pointer;
          border: 1px solid gray;
          width: 100%;
          transition: all 0.5s ease;
          &.active{
            background: lightgrey;
          }
        }

        .table-content{
          display: flex; flex-direction: row;
          justify-content: space-around;
          span{
            // align-self: center;
          }
          svg{
            width: 25px; height: 25px;
          }
        }
      }

      .content{
        text-align: center;
        width: 100%; height: 100%;
        padding: 5px;
        background: linear-gradient(to bottom,
          #d4d4d4,
          #fff
          );
        position: relative;

        &-1, &-2, &-3{
          position: absolute;
          color: #000;
          font-size: 2.5em;
          width: 100%; height: 100%;
          display: flex; flex-direction: column;

          h2{
            font-size: 0.8em;
          }
          p{
            font-size: 22px;
          }
          a{
            font-size: 22px;
            color: black;
            width: 200px;
            margin-top: auto;
            margin-bottom: 75px;
            margin-left: auto;
            margin-right: 25px;
            display: block;
          }
        }
      }
    }

  }


`;