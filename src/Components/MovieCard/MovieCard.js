import React from 'react';

import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({
  movie: { name, date, rating, image, type, description },
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">About</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH the video </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;