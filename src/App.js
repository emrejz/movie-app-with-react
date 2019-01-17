import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import {
	Container, Divider, Grid, Header, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'
import { menuStyle, fixedMenuStyle } from './helpers/styleHelper';


class App extends Component {
  state = {
		menuFixed: null,
		overlayFixed: false,
	};

	

	stickTopMenu = () => this.setState({ menuFixed: true })


	unStickTopMenu = () => this.setState({ menuFixed: null })

  render() {
		const { menuFixed } = this.state

		return (
      <div className="App">
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						borderless
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
					>
						<Container text>
							<Menu.Item>
								<Image size='mini' src='https://react.semantic-ui.com/logo.png' />
							</Menu.Item>
							<Menu.Item as={Link} to="/">Movieapp</Menu.Item>
							<Menu.Item as={Link} to="/movies">
                  Movies
              </Menu.Item>
							<Menu.Item as='a'>Add New</Menu.Item>
						</Container>
					</Menu>
				</Visibility>

				<Container text>
				

					<Route path='/movies' component={MoviesPage}></Route>

        </Container>
            <hr/>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci quod eius totam aliquam molestias, laboriosam tempora doloremque numquam velit error animi minus recusandae, necessitatibus reprehenderit debitis! Architecto, labore placeat.</div>
				<Segment
					inverted
					style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
					vertical
				>
					<Container textAlign='center'>
						<Grid columns={4} divided stackable inverted>
							<Grid.Row>
								<Grid.Column>
									<Header inverted as='h4' content='Group 1' />
									<List link inverted>
										<List.Item as='a'>Link One</List.Item>
										<List.Item as='a'>Link Two</List.Item>
										<List.Item as='a'>Link Three</List.Item>
										<List.Item as='a'>Link Four</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted as='h4' content='Group 2' />
									<List link inverted>
										<List.Item as='a'>Link One</List.Item>
										<List.Item as='a'>Link Two</List.Item>
										<List.Item as='a'>Link Three</List.Item>
										<List.Item as='a'>Link Four</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted as='h4' content='Group 3' />
									<List link inverted>
										<List.Item as='a'>Link One</List.Item>
										<List.Item as='a'>Link Two</List.Item>
										<List.Item as='a'>Link Three</List.Item>
										<List.Item as='a'>Link Four</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted as='h4' content='Footer Header' />
									<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Divider inverted section />
						<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
						<List horizontal inverted divided link>
							<List.Item as='a' href='#'>Site Map</List.Item>
							<List.Item as='a' href='#'>Contact Us</List.Item>
							<List.Item as='a' href='#'>Terms and Conditions</List.Item>
							<List.Item as='a' href='#'>Privacy Policy</List.Item>
						</List>
					</Container>
				</Segment>
      </div>
    );
  }
}

export default App;
