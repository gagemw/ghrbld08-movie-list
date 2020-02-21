import React from 'react';
var MovieListEntry = (props) => (
  <button className="movie-list-entry" onClick={()=>handleSelect(props.idx)}>
    <div className="movie-list-entry-title"
    >{props.movie.title}</div>
    <button className="movie-list-entry-watched" onClick={()=>props.handleToggle(props.idx)}
    >{props.movie.watched ? 'Watched' : 'Not Watched'} </button>
    <div className={props.movie.selected ? '' : 'hide'}>
      {props.movie.year}{props.movie.runtime}{props.movie.metascore}{props.movie.imdb}
    </div>
  </button>
);

export default MovieListEntry;
