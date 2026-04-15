import React from 'react';

const FooterBox = ({ title, iconName }) => {
  return (
    <div className="col-4 col-md-3">
      <div className="social-card">
        <small className="d-block mb-2">{title}</small>
        <div className="social-icon">🎃</div>
      </div>
    </div>
  );
};

export default FooterBox;