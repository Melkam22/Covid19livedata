
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
            infected: theData.confirmed.total,
            recovered: theData.recovered.total,
            deaths: theData.deaths.total,
            date: theData.reportDate
        })) 
        return theDailyData
        //console.log(data)
    }
    catch(error){
        console.log(error);//& export showDailyData to Chart.jsx
    }
}

/* fetchdata for EachCountry.jsx */
/* fetchdata for EachCountry.jsx */
/* export const fetchEachCountry = async()=>{
    try{
        const response = await axios.get(`${url}/countries`);
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}, it works, once we ve seen list of countries we ll change it to the below */

export const fetchEachCountry = async()=>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((chaquePays)=>chaquePays.name);
    }
    catch(error){
        console.log(error);//then, export it to EachCountry.jsx
    }
}
