import React from 'react';

const Card = ({ image, title, description, url }) => {
  return (
    <div className="project-card-sm">
      <div className="card-border-gradient"></div>
      <div className="card-container">
        <img src={image} alt={title} />
        <div className="wrapper">
          <h1>{title}</h1>
          <p>{description}</p>
          <a className='visitLink' href={url}>Visit Here</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
