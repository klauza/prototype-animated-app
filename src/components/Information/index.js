import React from 'react';
import { NavLink } from 'react-router-dom';
import { AbsoluteWrapper, BackButton } from '../reusable';
import { Container } from './InformationCSS';

const Information = () => {
  return (
    <AbsoluteWrapper>
      <Container>
        <div className="info-header">
          <p>Information</p>
          <NavLink exact to={{pathname: '/', state: 0}}><BackButton text="button" icon=">" /></NavLink>
        </div>
        <div className="info-content">
          <p>content_1</p>
          <p>content_2</p>
        </div>
      </Container>
    </AbsoluteWrapper>
  )
}

export default Information
