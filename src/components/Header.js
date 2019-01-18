import React, {Component} from "react";
import {Container, Image, Menu, Visibility,} from 'semantic-ui-react'
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';
import {Link, NavLink} from 'react-router-dom'


export default class Header extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  };

  stickTopMenu = () => this.setState({
    menuFixed: true
  })


  unStickTopMenu = () => this.setState({
    menuFixed: null
  })
  render() {
    const {
      menuFixed
    } = this.state
    return (
        <div>
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
							<Menu.Item as={Link} to="/">
								<Image size='mini' src='https://react.semantic-ui.com/logo.png' />
								
							</Menu.Item>
							<Menu.Item as={Link} to="/" header>Movieapp</Menu.Item>
							<Menu.Item as={NavLink} to="/movies">
								Movies
							</Menu.Item>
							<Menu.Item as={Link} to="/add" >Add New</Menu.Item>
						</Container>
					</Menu>
				</Visibility>
        </div>
      
    );
  }
}