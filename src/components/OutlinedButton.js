import React from 'react';
import './OutlinedButton.css';

const OutlinedButton = ({ onClick, className, component:Component }) => {
  return (
    <button className={className} onClick={onClick}>
      <Component/>
    </button>
  );
};

export default OutlinedButton;
