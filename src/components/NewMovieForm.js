import React, {Component} from 'react';
import { Button, Form, Image,Message } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'




class NewMovieForm extends Component {
	constructor(props){
		super(props)
		console.log(this.props);
	}
	state = {
		title: '',
		cover: '',
		done:false,
		errors:{}
	};

	static propTypes={
		addNewMovie: PropTypes.func.isRequired
	}
	handleChange=(e)=>{
	this.setState({
		[e.target.id]:e.target.value
	})
	}
	onSubmit=()=>{
	const errors=this.validate();
	this.setState({
		errors
	})
	if(Object.keys(errors).length===0){
		this.props.addNewMovie(this.state);
		this.setState({
		title: '',
		cover: '',
		})
	}
	}
	
	validate=()=>{
		const errors={};
		if(!this.state.title) errors.title="Enter title!";
		if(!this.state.cover) errors.cover="Enter cover url!";
		if(!this.props.newMovie.fetched) this.setState({done:true})
		return errors;  
	}

	render() {
		const form=	<Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
		<Form.Field error={!!(this.state.errors.title)}>
			<label>Title</label>
			{this.state.errors.title && <ErrorMessage message={this.state.errors.title}/> }
			<input
				id="title"
				value={this.state.title}
				onChange={this.handleChange}
				placeholder='Title' />
		</Form.Field>
		<Form.Field error={!!(this.state.errors.cover)}>
			<label>Cover Url</label>
			{this.state.errors.cover && <ErrorMessage message={this.state.errors.cover}/> }
			<input
				id="cover"
				value={this.state.cover}
				onChange={this.handleChange}
				placeholder='Cover Url' />
		</Form.Field>
		<Image src={this.state.cover} size='small' />
		<div className="clearfix"></div>
		<Button type='submit'>Submit</Button>
		{
			this.props.newMovie.error.response
			&&
			(
				<Message negative>
					<Message.Header>We're Sorry</Message.Header>
					<p>A problem occured while recording.</p>
				</Message>
			)
		}
	</Form>;

		
		return (
			<div>
				<h2>new movie form</h2>
				<h2>New Movie</h2>
				{form}
				{this.props.newMovie.fetched && <Redirect to="/movies"/> }
			</div>
		);
	}}

	export default NewMovieForm;