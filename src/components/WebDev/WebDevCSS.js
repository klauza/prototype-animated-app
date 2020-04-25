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
export const ProjectDiv = styled(animated.div)`
  .project__container{
    margin: 20px 0;
    display: flex; flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .project{
    
    &__main{
      display: flex;
      flex-direction: column;

      // MAIN TOP
      &-top{
        display: flex;
        flex-direction: row;

        .image{
          height: 100px;
          width: 100px;
          img{
            height: 100%; width: 100%;
            object-fit: cover;
          }
        }
        
        .info{
          h3{
            color: red;
          }
        }

        .live-btn{
          button{
            background: black;
            color: white;
          }
        }
      }

      // MAIN BOT
      &-bot{
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // grid-template-rows: 0;
        display: flex; flex-direction: row;
        background: yellow;
        width: 100%;
        overflow: hidden;
        span{
          height: 50px;
        }
      }

    }

    // MORE BUTTON
    &__more{
      width: 100%;
      height: auto;
    }
    


  }
`;

export const ProjectsWrapper = styled.div`
  height: 100%;
  width: 100%;


`;

export const HeroMain = styled.div`
  background: gray;
  width: 100%; height: 100%;
`;