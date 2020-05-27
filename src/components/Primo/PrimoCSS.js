import { animated } from 'react-spring';
import styled from 'styled-components';

export const HeroMain = styled.div`
  background: grey;
  height: 100%;
  position: relative;
`;

export const Header = styled.div`
position: absolute;
top: 50%; left: 50%;
transform: translate(-50%, -50%);
  h1{
    // text-align: center;
    font-family: Verdana;
    font-size: 10em;
    color: #000;
    transform: translate(-50%, -50%);
  }
`;

export const BackButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 60px;
  left: 50%; transform: translateX(-50%);
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.6);
  background: #5ba3de; color: #fff; font-weight: 700;
  &:hover{
    box-shadow: 0 0 5px 0 rgba(0,0,0,.8);
  }
  &:active, &:focus{
    border: 0; outline: 0;
  }
  &:active{
    box-shadow: 0 0 3px 0 rgba(0,0,0,.6);
  }
`;

export const ContentMain = styled.div`
  background: lightgrey;
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
  
  @media(max-width: 1280px){
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
    background: rgba(0,0,0,.6);
    width: 100%;
    text-align: center;
    h1{
      padding: 5px;
      color: #fff;
    }
  }


  @media(max-width: 998px){
    height: 350px;
  }


`;
export const ProjectDiv = styled(animated.div)`

  &.project__container{
    background-color: #EEF0F2;
    margin: 20px 0;
    display: flex; flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid black;
  }
  .project{
    
    &__main{
      display: flex;
      flex-direction: column;
      padding: 5px;

      // MAIN TOP
      &-top{
        display: grid;
        grid-template-columns: auto 1fr auto;

        .image{
          height: 100px;
          width: 100px;
          img{
            height: 100%; width: 100%;
            object-fit: cover;
          }
        }
        
        .info{
          width: auto;
          padding: 0 5px;
          h3{
            color: red;
          }
          @media(max-width: 550px){
            p{
              font-size: 2.25vw;
            }
          }
        }

        .live-btn{
          align-self: center;
          text-align: center;
          button{
            font-size: 12px;
            background: black;
            color: white;
            padding: 5px;
            a{
              display: block;
              width: 100%; height: 100%;
              margin: 0;
              text-align: center;
            }
          }
        }
      }

      // MAIN BOT
      &-bot{
        display: grid; 
        grid-template-columns: 105px 105px 1fr;
        width: 100%;
        overflow: hidden;
        text-align: center;
        @media(max-width: 768px){
          grid-template-columns: 1fr 1fr;
        }

        &>div{
          margin: 25px 2.5px 10px;
        }
        &>div>div{
          margin: 1.25px 0;
          border: 1px solid #707070;
        }

        span{
          display: block;
          padding: 5px 0;
          border: 1px solid #707070;
        }

        .features{
          span{
            background: black; color: white;
          }
         
          
        }

        .technologies{
          span{
            background: black; color: white;
          }
        }

        .images{
          width: 100%;
          display: flex; flex-direction: column;

          span{
            background: black; color: #fff;
            width: 100%;
          }
          .img-holder{
            // width: 100%;
            display: flex; flex-direction: row;
            justify-content: space-around;
            border: none;
            overflow-x: none;
            div{
              width: 125px; height: 125px;
              margin: 5px 2.5px 0;
              border: 1px solid #000;
              img{
                width: 100%; height: 100%; object-fit: cover;
              }
            }
          }

          @media(max-width: 768px){
            grid-row: 2;
            grid-column: span 2;
            .img-holder{
              div{
                width: 125px; height: 125px;
              }
            }
          }

          @media(max-width: 500px){
            .img-holder{
              div{
                // width: auto; height: auto;
              }
            }
          }

        }

      }

    }

    // MORE BUTTON
    &__more{
      width: 100%;
      height: auto;
      
      button{
        width: 100%;
        cursor: pointer;
      }
    }
    


  }
`;

export const ProjectsWrapper = styled.div`
  height: 100%;
  width: 100%;


`;

