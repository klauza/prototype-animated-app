import React from 'react';
import styled from 'styled-components';
// import history from '../../history';

const Btn = styled.button`
  width: 100px;
  height: 40px;

  display: block;
  border: 1px solid red;
`;

const BackButton = (props) => {
  return (
    <Btn>
      {props.text}
      {props.icon && props.icon}
    </Btn>
  )
}

export default BackButton
