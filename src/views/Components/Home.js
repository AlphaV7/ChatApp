import React from 'react';

import { ChatHeader, ChatMessageBody, ChatMessageInput } from '../Containers/index';

const messageListElements = [
  {
    sender: 'user',
    message: 'message from user',
  },
  {
    sender: 'bot',
    message: 'messge from bot',
  },
];

export default function Home(props) {
  return (
    <div className="chat-app">
      <ChatHeader />
      <ChatMessageBody messageListElements={messageListElements}/>
      <ChatMessageInput />
    </div>
  );
}
