import React from 'react';
import './TextButton.css';

const TextButton = ({ onClick, children }) => {
  return (
    <button className="text-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default TextButton;
