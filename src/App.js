import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2'; // corrected Page2 import
import Page3 from './Components/Page3'; // corrected Page3 import

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1'
    }
  }

  onRoutechange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="">Welcome Home</h1>
        </header>
        <Page1 onRoutechange={this.onRoutechange}/>
        <Page2 onRoutechange={this.onRoutechange}/>
        <Page3 onRoutechange={this.onRoutechange}/>
      </div>
    );
  }
}

export default App;
