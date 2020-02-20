import React from 'react';

var Search = (props) => (
  <div className="search-bar">
    <input id="text"/>
    <button onClick={()=>props.handleClick()}>
      <span >Go!</span>
    </button>
  </div>
);

export default Search;
