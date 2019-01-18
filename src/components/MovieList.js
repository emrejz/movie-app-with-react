import React from 'react';
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react';
import { HashLoader } from 'react-spinners';    


const MovieList=(props)=> { 
  
    console.log( props.movies.error.response);
    console.log( props.movies.error.status);

    
    const errorConnection=(
    <div>
    <p>Error connection</p>
   </div>
    );
 
 const loadingSpinner=(
    <HashLoader 
        size={40}
        color={'#36bdb3'}
        loading={props.movies.fetching}
    />);

    const movieList=(
        <div>
        {   
            props.movies.movies.length===0 
                ? <h3>{"movie list is empty"}</h3>
                : props.movies.fetched ?
                <Grid stackable columns={3}>
                    {
                        props.movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                    }
                </Grid> : loadingSpinner
        }
    </div>)
    return (
      <div>
          
          { props.movies.error.response ? errorConnection : movieList  }
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