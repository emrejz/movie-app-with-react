import React, { Component } from 'react';
import PropTypes from 'prop-types'
const MovieList=(props)=> {
    const emptyMessage=(
        <p>Movie list is empty</p>
    );
    const movieList=(
        <div>Movie list</div>
    )
    return (
      <div>
          {props.movies.length===0 ? emptyMessage : movieList}
      </div>
    )
  }

MovieList.propTypes={
    movies:PropTypes.array.isRequired
};
MovieList.defaultProps={};
export default MovieList;