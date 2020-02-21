import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import storage from './storage.js';
import Input from './input.js';
import Selector from './Selector.js';
import '../main.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: storage,
      text: '',
      inputText: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

  }

  handleClick () {
    this.setState({
      text: document.getElementById('text').value, 
      movies: storage.filter(movie => movie.title.includes(document.getElementById('text').value))
    });
  }

  handleInput () {
    storage.push({title: document.getElementById('input-text').value, watched: false});
    this.setState({
      inputText: document.getElementById('input-text').value,
      movies: storage
    });
  }

  handleToggle (idx) {
    storage[idx].watched = !storage[idx].watched;
    this.setState({
      movies: storage
    });
  }

  handleFilter (action) {
    this.setState({
      movies: storage.filter(movie => movie.watched === (action === 'Watched' ? true : (action === 'To Watch' ? false : movie.watched)))
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div><Input
            handleInput={this.handleInput}/>
          </div>
          <div><Search
            handleClick={this.handleClick}/>
          </div>
          <span>
            <Selector action='Watched'
              handleFilter={this.handleFilter}/>
            <Selector action='To Watch'
              handleFilter={this.handleFilter}/>
            <Selector action='All'
              handleFilter={this.handleFilter}/>
          </span>
        </nav>
        <hr></hr>
        <div><MovieList movies={this.state.movies}
          handleToggle={this.handleToggle}/>
        </div>
      </div>
    );
  }
}

export default App;
