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
                //{ data: Ddata.map(({confirmed})=>confirmed)}before,
                //{data: Ddata.map(({deaths})=>deaths)}
                { data: Ddata.map(({infected})=>infected), label: 'Infected', borderColor:'rgba(255,0,0,1)', fill: true},
                {data: Ddata.map(({deaths})=>deaths), label: 'Deaths', borderColor: 'rgba(0,0,255,1)', backgroundColor:'rgba(0,0,255,.4)', fill: true},
                    ],
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