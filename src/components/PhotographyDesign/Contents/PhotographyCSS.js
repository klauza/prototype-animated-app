import styled from 'styled-components';

export const PhotographyContent = styled.div`
  width: 100%;
  margin-top: 100px;
  padding-bottom: 50px;
  

  .react-draggable, .cursor {
    cursor: move;
  }
  .no-cursor {
    cursor: auto;
  }
  .cursor-y {
    cursor: ns-resize;
  }
  .cursor-x {
    cursor: ew-resize;
  }

  .gallery-container{
    background: #fff;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px;
    float: left;
  }
  .box {
    // background: #fff;
    // border: 1px solid #999;
    // border-radius: 3px;
    // padding: 2.5px;
    float: left;
  }

  .photo-image{
    width: 180px;
    height: 180px;
    img{
      border-radius: 3px;
      border: 1px solid #999;
      width: 100%; height: 100%; object-fit: cover;
      
      box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.5);
    }
    button{
      position: absolute;
      bottom: 2.5%; right: 2.5%;
      z-index: 999;
      border: 1px solid #000;
      border-radius: 50%;
      padding: 3.5px;
      cursor: pointer;
    }
  }
`;