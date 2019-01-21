import React, {Component} from 'react';
import NewMovieForm from '../NewMovieForm';
import {connect} from 'react-redux'
import {addNewMovie, fetchMovie} from '../../actions/addNewMovie';


class NewMoviePage extends Component {
	constructor(props){
		super(props)
		console.log(this.props);
	}
	componentDidMount() {
		
		const { match } = this.props;
		if (!this.props.movie && match.params._id) {
		  this.props.fetchMovie(match.params._id);
		}
	}
	render() {
		return (
			<div>
				<NewMovieForm 
				newMovie={this.props.newMovie} 
				movie={this.props.movie}
				addNewMovie={this.props.addNewMovie}/>
			</div>
		);
	}
}
const mapStateToProps=({newMovie,movies},props)=>{
return{
	newMovie,
	movie:movies.movies.find(movie=>movie._id===props.match.params._id)
}}
const mapDispatchToProps={
		addNewMovie,
		fetchMovie
}
export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage);