import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">

    {props.movies.map((movie, i) =>
      <MovieListEntry movie={movie} key={i}/>
    )}

  </div>
);

export default MovieList;