import React from 'react';
import { ContactMe } from './ContactCSS';

const Contact = ({props, propsContact}) => {
  return (
    <div style={{background: 'lightgreen'}}>
      <ContactMe style={propsContact}>
        CONTACT PAGE
      </ContactMe>
    </div>
  )
}

export default Contact
