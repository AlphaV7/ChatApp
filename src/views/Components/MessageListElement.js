import React from 'react';
import classnames from 'classnames';

import { Icon, Message } from './index';

export default function MessageListElement(props) {
  const { className, messageListElement } = props;
  const sender = messageListElement.sender;
  const message = messageListElement.message;
  const notSent = messageListElement.notSent;

  return (
    <li
      className={
        classnames(
          'message-list__element',
          {
            'message-list__element--user': sender === 'user',
            'message-list__element--bot': sender === 'bot',
            'message-list__element--not-sent': notSent,
          },
          className
        )
      }
    >
      {!notSent && <Icon sender={sender} />}
      {!notSent && (<Message message={message}/>)}
      {notSent === true && (<Message message="unable to send message" className="message-not-sent" />)}
    </li>
  );
}
