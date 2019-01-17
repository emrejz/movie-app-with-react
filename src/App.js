import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Link,Route} from 'react-router-dom';
import Footer from "./components/Footer"
import Header from "./components/Header"
import MoviesPage from './components/pages/MoviesPage';
import {
	Container
} from 'semantic-ui-react'



class App extends Component {
 


  render() {
		

		return (
      <div className="App">
			
         <Header/>
				<Container text>
      
      
					<Route path='/movies' component={MoviesPage}></Route>

        </Container>
     
				
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
