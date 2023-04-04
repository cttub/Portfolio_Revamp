import React, { Component } from 'react';
import LetsChat from './Homepage/LetsChat';
class Contact extends Component {
  handleClick = () => {
    window.location.href = 'mailto:ctbui.uyen@gmail.com';
  };

  render() {
    return (
      <div id="contact">
        <div className='chatting'><LetsChat/></div>
      </div>
    );
  }
}

export default Contact;
