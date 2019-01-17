import React from 'react';
import PropTypes from 'prop-types'
const MovieList=(props)=> {
    const emptyMessage=(
        <p>Movie list is empty</p>
    );
    const movieList=(
        <div>{props.movies.error.response ? <h2>hata</h2>: "çalışıyor"}</div>
    )
    return (
      <div>
          {props.movies.length===0 ? emptyMessage : movieList}
      </div>
    )
  }

MovieList.propTypes={
    movies:PropTypes.shape({
        movies:PropTypes.array.isRequired
    }).isRequired
};
MovieList.defaultProps={};
export default MovieList;