import React, { Component } from 'react';
import Cards from './resource/Card/Cards';
import Chart from './resource/Chart/Chart';
import EachCountry from './resource/EachCountry/EachCountry';
import styles from './App.module.css';
import {fetchForCards} from './API';
//import {fetchEachCountry} from './API';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

   
//fetching the data
async componentDidMount(){
  const myData = await fetchForCards()
  this.setState({
    data: myData
  })
  //console.log(myData);
}
handleChaquePays = async (country)=>{
  const data = await fetchForCards(country);
  console.log(data);//we see list of countries, then, we ll change the api to get the data for each countries
   
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
