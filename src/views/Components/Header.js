import React from 'react';
import classnames from 'classnames';

export default  function Header(props) {
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
      <h1 className="chat-header__heading">{chatBotName}</h1>
      <h2 className="chat-header__description">{chatBotDescription}</h2>
    </div>
  );
}
