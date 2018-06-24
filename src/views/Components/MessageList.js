import React from 'react';
import classnames from 'classnames';

import { MessageListElement } from './index';

export default function MessageList(props) {
  const { messageListElements, className } = props;

  return (
    <ul
      className={
        classnames(
          'message-list',
          className
        )
      }
    >
      {
        messageListElements.map(function(messageListElement, index) {
          return <MessageListElement messageListElement={messageListElement} key={index}/>;
        })
      }
    </ul>
  );
}
