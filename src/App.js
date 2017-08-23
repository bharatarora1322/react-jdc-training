import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Contents';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header title="Welcome to React JDC Training" onHeaderClick={this.onHeaderClick} />
        
        
        <p className="App-intro">
          "Jaipur is awesome"
        </p>
        </div>      
    );
  }

  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };
}

export default App;
