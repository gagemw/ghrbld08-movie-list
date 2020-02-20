import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import storage from './storage.js';
import Input from './input.js';



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
        </nav>
        <div><MovieList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;
