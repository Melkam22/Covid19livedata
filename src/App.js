import React, { Component } from 'react';
import Cards from './resource/Card/Cards';
import Chart from './resource/Chart/Chart';
import EachCountry from './resource/EachCountry/EachCountry';
import styles from './App.module.css';

class App extends Component {

  render(){

  return (
    <div className={styles.container}>
        {/* <h2>App.js</h2> */}
        <Cards />
        <EachCountry />
        <Chart />
    </div>
  );
}
}

export default App;
