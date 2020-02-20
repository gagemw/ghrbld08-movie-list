import React from 'react';

var Selector = (props) => (
  <div className="selector-button">
    <button onClick={()=>props.handleFilter(props.action)}>
      <span >{props.action}</span>
    </button>
  </div>
);

export default Selector;