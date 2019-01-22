import React from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const extra = (movie,deleteMovie,updateMovie) => {
	return(
		<div className="ui two buttons">
			<Button animated as={Link} to={`/movie/${movie._id}`}>
				<Button.Content visible>Edit</Button.Content>
				<Button.Content hidden>
					<Icon name='right arrow' />
				</Button.Content>
			</Button>
			<Button animated='vertical'>
				<Button.Content hidden onClick={()=>deleteMovie(movie._id)}>Delete</Button.Content>
				<Button.Content visible>
					<Icon name='trash' />
				</Button.Content>
			</Button>
		</div>
	);
};

const MovieCard = ({ movie,deleteMovie }) => (
    
    <Grid.Column>
    <Card >
        <Card className="center aligned blurring dimmable image "
            image={movie.cover}
            header={ movie.title}
            meta={ movie.year}
            extra={extra(movie,deleteMovie)}

            
        />
    </Card>
</Grid.Column>
);

export default MovieCard;