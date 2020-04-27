import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './Each.module.css';
import {fetchEachCountry} from '../../API';

const EachCountry = () => {

const [eachCountry, setEachCountry] = useState([]);

useEffect(()=>{
    const showCountries = async ()=>{
        setEachCountry (await fetchEachCountry());
    }
    //console.log(eachCountry);we ll delete this when we map the data inside return & pass it inside option 
    showCountries();
},[setEachCountry]);

return(
    //<h1> EachCountry</h1>instead of it, do the below
    <FormControl>
        <NativeSelect> 
            <option value="global">All Countries</option>
            {eachCountry.map((chaquePays, a)=><option key={a} value={chaquePays}>{chaquePays}</option>)}
        </NativeSelect>
    </FormControl> 
    )
}

export default EachCountry;