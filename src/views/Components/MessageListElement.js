import React from 'react';
import classnames from 'classnames';

import { Icon, ListMessage } from './index';

export default function MessageListElement(props) {
  const { className, message, sender } = props;

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
      <ListMessage message={message}/>
    </li>
  );
}
