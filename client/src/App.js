import React, { Component } from 'react';
// import UrlForm from './cmps/urlForm';
import UrlPage from './cmps/urlPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Galapro interview- Adi Gonnen</h1>
        </header>
        <UrlPage/>
        {/* <UrlForm/> */}
      </div>
    );
  }
}

export default App;
