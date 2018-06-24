import React from 'react';

import { MessageList } from '../Components/index';

export default class ChatMessageBody extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { messageListElements } = this.props;

    return (
      <MessageList messageListElements={messageListElements}/>
    );
  }
}
