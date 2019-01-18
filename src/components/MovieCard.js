import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const MovieCard = ({ movie }) => (
    <Grid.Column>
    <Card >
        <Card className="center aligned blurring dimmable image "
            image={movie.cover}
            header={ movie.title}
            meta={ movie.year}
            
        />
    </Card>
</Grid.Column>
);

export default MovieCard;