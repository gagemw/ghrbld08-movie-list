import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">

    {props.movies.map((movie, i) =>
      <div><MovieListEntry movie={movie} key={i} idx={i}
        handleToggle={props.handleToggle}handleSelect={this.handleSelect} /></div>
    )}

  </div>
);

export default MovieList;