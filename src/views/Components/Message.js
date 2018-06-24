import React from 'react';
import classnames from './classnames';

export default function Message(props) {
  const { className, message } = props;

  return (
    <span
      className={
        classnames(
          'message',
          className
        )
      }
    >
      {message}
    </span>
  );
}
