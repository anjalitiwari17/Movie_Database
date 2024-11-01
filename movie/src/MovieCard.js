import React from 'react';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, overview, director, actors, genreNames } = movie;

  return (
    <div className="movie">
      <img
        src={poster_path ? `${IMGPATH}${poster_path}` : "https://via.placeholder.com/1280x720"}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
      <div className="overview">
        <h2>{title}</h2>
        <p><strong>Overview:</strong> {overview}</p>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Actors:</strong> {actors}</p>
        <p><strong>Genres:</strong> {genreNames}</p>
      </div>
    </div>
  );
};

export default MovieCard;
