import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';//for multiple styling
import CountUp from 'react-countup';

/* const Cards = (props) => {
    console.log(props) to fetch data & show it on cards.jsx do the below*/
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) => {
        if(!confirmed){
            return 'Searching ...'
        }
return(//cards from materializedcss
        <div className={styles.container}>
        <div className={cx(styles.card, styles.first)}> 
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Confirmed-Infection</p>
            {/* <p>{confirmed.value}</p> just to add countup do the below */}
            <CountUp 
                start={0}
                end={confirmed.value}//value is shown on browser inspect
                duration={10}
                separator=","
            />
            <p>{new Date(lastUpdate).toDateString()}</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/" target="_blank">Link to WHO</a>
           
             </div>
             </div>
            </div>
        </div> 

        {/* Recovered */}
        <div className={cx(styles.card, styles.second)}> 
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Recovered-Patients</p>
             <CountUp 
                start={0}
                end={recovered.value}
                duration={10}
                separator=","
             />
            <p>{new Date(lastUpdate).toDateString()}</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/" target="_blank">Link to WHO</a>
           
             </div>
             </div>
            </div>
            {/* deaths */}
            <div className={cx(styles.card, styles.third)}> 
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Confirmed-Deaths</p>
             <CountUp 
                start={0}
                end={deaths.value}
                duration={10}
                separator=","
             />
            <p>{new Date(lastUpdate).toDateString()}</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/" target="_blank">Link to WHO</a>
           
             </div>
             </div>
            </div>
        </div>
    )
}

export default Cards;