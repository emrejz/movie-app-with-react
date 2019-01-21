import React from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const extra = movie => {
	return(
		<div className="ui two buttons">
			<Button animated as={Link} to={`/movie/${movie._id}`}>
				<Button.Content visible>Edit</Button.Content>
				<Button.Content hidden>
					<Icon name='right arrow' />
				</Button.Content>
			</Button>
			<Button animated='vertical'>
				<Button.Content hidden>Delete</Button.Content>
				<Button.Content visible>
					<Icon name='trash' />
				</Button.Content>
			</Button>
		</div>
	);
};

const MovieCard = ({ movie }) => (
    
    <Grid.Column>
    <Card >
        <Card className="center aligned blurring dimmable image "
            image={movie.cover}
            header={ movie.title}
            meta={ movie.year}
            extra={extra(movie)}

            
        />
    </Card>
</Grid.Column>
);

export default MovieCard;