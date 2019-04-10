import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


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
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          Testing my Create React APP friends
        </header>
      </div>
    );
  }
}

export default App;
