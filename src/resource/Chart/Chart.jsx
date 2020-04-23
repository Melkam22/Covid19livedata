import React, {useState, useEffect} from 'react';
import {showDailyData} from '../../API';
import {Line, Bar} from 'react-chartjs-2';

const Chart = () =>{
    const [Ddata, setDdata] = useState([]);

useEffect (()=>{
    const displayDailyData = async()=>{
        setDdata(await showDailyData())
    }
    console.log(Ddata);
    displayDailyData();
})

return(
    <h1> Chart</h1>
    )
    
}

 
export default Chart;