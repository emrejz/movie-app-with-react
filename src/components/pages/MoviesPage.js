import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieList from '../MovieList'
import {fetchMovies,deleteMovie} from '../../actions/movies'


class MoviesPage extends Component {
  static propTypes={
    movies:PropTypes.object.isRequired
  };
  componentDidMount = () => {
    this.props.fetchMovies();
  }
  
  render() {
    
    return (
      <div style={{textAlign: "left"}}>
        <h2 >Movies page</h2>
        <MovieList  movies={this.props.movies} deleteMovie={this.props.deleteMovie} ></MovieList>
      </div>
    )
  }
};
const mapStateToProps=state=>{
return{
  movies:state.movies
}
};
const mapDispatchToProps={
  fetchMovies,
  deleteMovie,
   
}
export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);