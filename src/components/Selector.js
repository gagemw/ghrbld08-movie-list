import React from 'react';

var Selector = (props) => (
  <button className="selector-button"onClick={()=>props.handleFilter(props.action)}>
    <span >{props.action}</span>
  </button>
);

export default Selector;