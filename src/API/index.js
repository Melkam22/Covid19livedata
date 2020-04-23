
/* exporting url for cards */
/* import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchForCards = async()=>{

    try{
        const response = await axios.get(url);
        return response
    }
    catch (error){
        console.log(error)
    }
} to target the right data do the below*/
import axios from 'axios';

/* fetchdata for Cards.jsx */
const url = 'https://covid19.mathdro.id/api';

    
export const fetchForCards = async()=>{
    try {
    const {data} = await axios.get(url); //{data} is from the url - inspect given data
    const preciseData = {
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        lastUpdate: data.lastUpdate
    }
            return preciseData
    }
    catch (error){
        console.log(error)
    }
}

/* fetchdata for Chart.jsx */

export const showDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
            const theDailyData = data.map((theData) =>({
            infected: theData.value,
            recovered: theData.recovered,
            deaths: theData.value,
            date: theData.lastUpdate
        }))
        return theDailyData
    }
    catch(error){
        console.log(error);//& export showDailyData to Chart.jsx
    }
}