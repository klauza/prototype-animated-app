import React from 'react';
import { AbsoluteWrapper, BackButton } from '../reusable';
import { Container } from './InformationCSS';

const Information = () => {
  return (
    <AbsoluteWrapper>
      <Container>
        <BackButton text="Back" icon=">" display="right" />
        <div className="info-header">
          <h2>Information</h2>
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
