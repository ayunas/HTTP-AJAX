import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Friend from './Components/Friend';



class App extends Component {
  constructor() {
    super();

    this.state = {
      friends : [],
      avatars : [ 
                  {ben: 'https://dl.airtable.com/70zwa8ESkWwVpGH3zcS7_ben.jpg'},
                  {austen: 'https://dl.airtable.com/S1InFmIhQBypHBL0BICi_austen.jpg'},
                  {ryan: 'https://dl.airtable.com/SAWlsIdwSXiadMO15B5E_ryan.hamblin.jpg'},
                  {sean: 'https://media.licdn.com/dms/image/C4E03AQHRE37r5NHxQQ/profile-displayphoto-shrink_800_800/0?e=1560384000&v=beta&t=ShcISrAVc6zYMDlzgEpO_MOqlzuEpzXVv2cQGbiSuuk'},
                  {michelle: 'https://media.licdn.com/dms/image/C5603AQFsSKGzn7EllA/profile-displayphoto-shrink_800_800/0?e=1560384000&v=beta&t=HLdY6Js3bXCT7XNeFGC8WzM_xMUZK7MAahq6uLGg-60'},
                  {luis: 'https://dl.airtable.com/NNQSNgNDTfeeGuMGk9v4_luis.jpg'}
                ]
                
    }
  }

  componentDidMount() {
    
    axios.get('http://localhost:5000/friends')
    
      .then( response => {
        this.setState({
          friends : response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
          These are my friends!
      </header>
        {this.state.friends.map( friend => {
          return <Route path='/' 
          render={ props => <Friend {...props} 
          friends={this.state.friends} 
          id={friend.id}
          avatars={this.state.avatars}
          />} 
          />;
        } )}
      </div>
    );
  }
}

export default App;
