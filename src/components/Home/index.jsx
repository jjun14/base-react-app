// @flow
import React from 'react';
import './Home.css';
import logo from 'assets/images/logo.svg';

const Home = ({ appName }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React App: {appName}</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

Home.defaultProps = {
  appName: 'baseApp',
};

export default Home;