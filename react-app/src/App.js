import React, {Component} from 'react';
import Contacts from './Cinemaworld.js'

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('https://challenge.lexicondigital.com.au/api/cinemaworld/movies/', {headers: {'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7' }})
            .then(res => res.json())
            .then((data) => {
              
                this.setState({ contacts: data.Movies })
            })
            .catch(console.log)
    }
}

export default App;