import React from 'react';
var MovieListEntry = (props) => (
  <div>
    <div className="movie-list-entry-title"
    >{props.movie.title}</div>
    <div className="movie-list-entry-watched"
    >{props.movie.watched ? 'Watched' : null} </div>
  </div>
);

export default MovieListEntry;
