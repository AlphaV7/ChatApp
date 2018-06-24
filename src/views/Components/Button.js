import React from 'react';
import classnames from 'classnames';

export default function Button(props) {
  const { className, onClick, children } = props;

  return (
    <button
      className={classnames(className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
