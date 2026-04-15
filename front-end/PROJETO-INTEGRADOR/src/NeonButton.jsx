import React from 'react';
import { Link } from 'react-router-dom';

const NeonButton = ({ to, text, variant = 'solid', className = ''}) => {
  const baseClass = variant === 'solid' ? 'btn-neon' : 'btn-outline-neon';
  
  return (
    <Link to={to} className={`btn px-4 py-2 ${baseClass} ${className}`}>
      {text}
    </Link>
  );
};

export default NeonButton;