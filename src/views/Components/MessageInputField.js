import React from 'react';
import classnames from 'classnames';

export default function MessageInputField(props) {
  const { inputRef, type, placeholder, name, className } = props;

  return (
    <input
      className={
        classnames(
          'chat-message__input',
          className
        )
      }
      ref={inputRef}
      type={type || 'text'}
      placeholder={placeholder}
      name={name}
    />
  );
}
