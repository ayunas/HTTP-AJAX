import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Friend from './Components/Friend';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends : []
    }

  }


  componentDidMount() {
    
    axios.get('http://localhost:5000/friends')
    
      .then( response => {
        console.log(response);
        this.setState({
          friends : response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          These are my friends
        </header>
        <Route path='/' component={Friend}/>
      </div>
    );
  }
}

export default App;
