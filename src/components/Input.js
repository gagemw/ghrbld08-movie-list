import React from 'react';

var Input = (props) => (
  <div className="add-bar">
    <input id="input-text" placeholder="Movie title..."/>
    <button onClick={()=>props.handleInput()}>
      <span >Add</span>
    </button>
  </div>
);

export default Input;