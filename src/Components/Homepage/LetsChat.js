import React, { Component } from 'react';
import SplineScene from '../Spline/SplineScene';

class LetsChat extends Component {
  handleClick = () => {
    window.location.href = 'mailto:ctbui.uyen@gmail.com';
  };

  render() {
    return (
      <div id="lets-chat">
        <div className='chat-container'>
          <div className='text-bubble col-lg-4'>
            <SplineScene/>
          </div>
          <div className='chat-info col-lg-6'>
            <h1 className='purple-text'><b>Let's Chat</b></h1>
            <p>Don't hesitate to reach out to me if you'd like to network, collaborate, or discuss my work. I'm always open to connecting and chatting!</p>
            <button onClick={this.handleClick} className='email-button green-btn'>Email Me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsChat;
