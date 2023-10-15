import React from 'react';

const Cards = ({ title, content, height }) => {

  const cardStyle = {
    height: `${height}px`,
  };
  return (
    <div className="card" style={cardStyle}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Cards;
