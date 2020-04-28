import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';//input field
import styles from './Each.module.css';
import {fetchEachCountry} from '../../API';

//const EachCountry = () => {//after handleChaquePays on App.jsx, instead of this the below
const EachCountry = ({handleChaquePays}) => {
const [eachCountry, setEachCountry] = useState([]);

useEffect(()=>{
    const showCountries = async ()=>{
        setEachCountry (await fetchEachCountry());
   }
    //console.log(eachCountry);//we ll delete this when we map the data inside return & pass it inside option 
    showCountries();
},[setEachCountry]);//to avoid infinite loop
//console.log(eachCountry);//dlt it once eachCountry.map is done for chaquePays


return(
    //<h1> EachCountry</h1>instead of it, do the below
    <FormControl className={styles.container}>
        <NativeSelect defaultValue="" onChange={(e)=>handleChaquePays(e.target.value)}> 
            <option value="global">All Countries</option>
            {eachCountry.map((country, a)=><option key={a} value={country}>{country}</option>)} 
        </NativeSelect>
    </FormControl>//go to App.jsx & set a state ...
    )
}

export default EachCountry;