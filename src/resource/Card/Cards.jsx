import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';//for multiple styling

/* const Cards = (props) => {
    console.log(props) to fetch data & show it on cards.jsx do the below*/
    const Cards = ({data: {confirmed, recovered, deaths, dailyTimeSeries} }) => {
        if(!confirmed){
            return 'Searching ...'
        }
    return(
        <div className={styles.container}>
          <div className={styles.card}> 
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Confirmed-Infection</p>
            <p>{confirmed.value}</p> 
            <p>Date here</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/">Link to WHO</a>
           
             </div>
             </div>
            </div>
        </div>

        {/* Recovered */}
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Recovered-Patients</p>
            <p>{recovered.value}</p> 
            <p>Date here</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/">Link to WHO</a>
           
             </div>
             </div>
            </div>
            {/* deaths */}
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Confirmed-Deaths</p>
            <p>{deaths.value}</p> 
            <p>Date here</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/">Link to WHO</a>
           
             </div>
             </div>
            </div>
        </div>
    )
}

export default Cards;