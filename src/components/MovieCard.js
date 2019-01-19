import React from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'

const extra=(
        <div className="edit-del-buttons">
         <Button animated>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name='edit' />
      </Button.Content>
      </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name='trash' />
      </Button.Content>
      </Button></div>
    );

const MovieCard = ({ movie }) => (
    
    <Grid.Column>
    <Card >
        <Card className="center aligned blurring dimmable image "
            image={movie.cover}
            header={ movie.title}
            meta={ movie.year}
            extra={extra}

            
        />
    </Card>
</Grid.Column>
);

export default MovieCard;