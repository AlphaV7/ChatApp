import React from 'react';

import { Button, MessageInputField } from '../Components/index';

export default class ChatMessageInput extends React.Component{
  constructor(props){
    super(props);

    this.inputFieldRef = React.createRef();
  }

  render(){
    return (
      <div className="chat-input-container">
        <MessageInputField />
        <Button>Send</Button>
      </div>
    );
  }
}
