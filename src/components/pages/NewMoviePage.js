import React, {Component} from 'react';
import NewMovieForm from '../NewMovieForm';
import {connect} from 'react-redux'
import {addNewMovie} from '../../actions/addNewMovie';


class NewMoviePage extends Component {
	constructor(props){
		super(props)
		console.log(this.props);
	}
	render() {
		return (
			<div>
				<NewMovieForm newMovie={this.props.newMovie} addNewMovie={this.props.addNewMovie}/>
			</div>
		);
	}
}
const mapStateToProps=({newMovie})=>{
return{
	newMovie
}}
const mapDispatchToProps={
		addNewMovie
}
export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage);