import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieList from '../MovieList'


class MoviesPage extends Component {
  static propTypes={
    movies:PropTypes.array.isRequired
  };
  render() {
  
    return (
      <div>
        <h2>Movies page</h2>
        <MovieList movies={this.props.movies}></MovieList>
      </div>
    )
  }
};
const mapStateToProps=state=>{
return{
  movies:state.movies
}
};
export default connect(mapStateToProps)(MoviesPage);