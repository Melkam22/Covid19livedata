import React from 'react';
import styles from './Card.module.css';

const Cards = (props) => {
    console.log(props)
    return(
        <div className={styles.container}>
          {/*   <div class="row"> */}
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <p>Infected</p>
            <p>Data here</p>
            <p>Date here</p>
            <p>Covid-19 Pandemic Current Information</p>
                </div>
            <div class="card-action">
            <a href="https://www.who.int/">Link to WHO</a>
           
             </div>
             </div>
            </div>
        {/*  </div> */}
        </div>
    )
}

export default Cards;