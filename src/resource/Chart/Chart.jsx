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
    <h2>Chart</h2>
    )
    
}

 
export default Chart;