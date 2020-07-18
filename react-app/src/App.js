import React, {Component} from 'react';
import Contacts from './components/Cinemaworld.js';
import MainPage from './pages/index'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MovieID from './components/movieIDs.js';
const cinemaworld_url = 'https://challenge.lexicondigital.com.au/api/cinemaworld/movies/'

class App extends Component {
    render() {
        return (
            <Router>
               <Route exact path= "/cinema" component = {Contacts} > <Contacts cinemaWorld={this.state.cinemaWorld} /> </Route>
               <Route exact path= "/hi" component = {MainPage}></Route>
               <Route exact path= "/405" component = {MovieID} > <MovieID id={this.state.id} /> </Route>
            </Router>
        
             
        )
    }

    state = {
        cinemaWorld: [],
        filmworld: [],
        id: []
    };

    componentDidMount() {
        fetch(cinemaworld_url, {headers: {'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7' }})
            .then(res => res.json())
            .then((data) => {
                let tmpArray = []
                for (var i = 0; i < data.Movies.length; i++) {
                    tmpArray.push(data.Movies[i].ID)
                }
                this.setState({id: tmpArray})
                this.setState({ cinemaWorld: data.Movies })
            })
            .catch(console.log)
    }
}

export default App;