import React from 'react';

import { ChatHeader, ChatMessageBody, ChatInput } from '../Containers/index';

export default function Home(props) {
  return (
    <div className="chat-app">
      <ChatHeader />
      <ChatMessageBody />
      <ChatInput />
    </div>
  );
}
