import React, {useState, useEffect} from 'react';
import {showDailyData} from '../../API';
import {Line, Bar} from 'react-chartjs-2';

const Chart = () =>{
    const [Ddata, setDdata] = useState([]);//same as state={Ddata: []};

useEffect (()=>{
    const displayDailyData = async()=>{
        setDdata(await showDailyData())
    }
    console.log(Ddata);
    displayDailyData();
})
//display global line-chart below
const showLineChart = (
    Ddata[0] ? (
    <Line 
        data={{
            //labels: Ddata.map(({date})=> date),
            //datasets: [{},{}]before the data was mapped
            labels: Ddata.map(({date})=> date),
            datasets: [
                { data: Ddata.map(({confirmed})=>confirmed)},
                {data: Ddata.map(({deaths})=>deaths)}
                    ]
        }}
    /> ) : null
)
    return(
        //<h1> Chart</h1>
        <div>
            {showLineChart}
        </div>
        )
    }

 
 
export default Chart;