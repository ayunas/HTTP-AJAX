import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data : []
    }

  }


  componentDidMount() {

    this.setState({
      data : ['test','test1','test2']
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
