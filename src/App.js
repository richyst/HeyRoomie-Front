import React, { Component } from 'react';
import './App.css';
import  Layout from './containers/layout';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
