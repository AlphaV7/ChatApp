import React from 'react';
import classnames from 'classnames';

export default function Header(props) {
  const { chatBotName, chatBotDescription, className } = props;

  return (
    <div
      className={
        classnames(
          'chat-header',
          className
        )
      }
    >
      <h3 className="chat-header__heading">{chatBotName}</h3>
      <h5 className="chat-header__description">{chatBotDescription}</h5>
    </div>
  );
}
