import React from 'react';
import './FlatButton.css';

const FlatButton = ({ onClick, children }) => {
  return (
    <button className="flat-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FlatButton;
