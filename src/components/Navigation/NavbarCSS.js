import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%; height: 40px;
  background: rgba(0,0,0,.25);
  .top-section{
    width: 1280px;
    margin: 0px auto;
    @media(max-width: 1280px){
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