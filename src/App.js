import React, { Component } from 'react';
import Cards from './resource/Card/Cards';
import Chart from './resource/Chart/Chart';
import EachCountry from './resource/EachCountry/EachCountry';
import styles from './App.module.css';
import {fetchForCards} from './API';

class App extends Component {
  state = {
    data: {},
    chaquePays: ""
  }

   
//fetching the data
async componentDidMount(){
  const myData = await fetchForCards()
  this.setState({
    data: myData
  })
  console.log(myData);
}
handleChaquePays = async (chaquePays)=>{
  //console.log(chaquePays);
  this.setState({chaquePays: chaquePays});
}

render(){

return (
    <div className={styles.container}>
        {/* <h2>App.js</h2> */}
        <Cards data={this.state.data}/>
        <EachCountry handleChaquePays={this.handleChaquePays}/>{/* call it @ it to EachCountry.ejx */}
        <Chart />
    </div>
  );
}
}

export default App;
