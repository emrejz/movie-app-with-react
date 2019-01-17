import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class MoviesPage extends Component {
  static propTypes={
    movies:PropTypes.array.isRequired
  };
  render() {
    console.log(this.props);   
    return (
      <div>
        Movies page
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