import React from 'react';
var MovieListEntry = (props) => (
  <div className="movie-list-entry">
    <div className="movie-list-entry-title"
    >{props.movie.title}</div>
    <button className="movie-list-entry-watched" onClick={()=>props.handleToggle(props.idx)}
    >{props.movie.watched ? 'Watched' : 'Not Watched'} </button>
  </div>
);

export default MovieListEntry;
