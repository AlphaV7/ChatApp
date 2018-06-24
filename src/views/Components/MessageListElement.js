import React from 'react';
import classnames from 'classnames';

import { Icon, Message } from './index';

export default function MessageListElement(props) {
  const { className, messageListElement } = props;
  const sender = messageListElement.sender;
  const message = messageListElement.message;

  return (
    <li
      className={
        classnames(
          'message-list__element',
          {
            'message-list__element--user': sender === 'user',
            'message-list__element--bot': sender === 'bot',
          },
          className
        )
      }
    >
      <Icon sender={sender} />
      <Message message={message}/>
    </li>
  );
}
