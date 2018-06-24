import React from 'react';

import { Header } from '../Components/index';

export default class ChatHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { chatBotName, chatBotDescription } = this.props;

    return (
      <Header
        chatBotName={chatBotName}
        chatBotDescription={chatBotDescription}
      />
    );
  }
}
