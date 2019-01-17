import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="movies">Movies page</Link>
          <Route path='/movies' component={MoviesPage}></Route>
        </header>
      </div>
    );
  }
}

export default App;
