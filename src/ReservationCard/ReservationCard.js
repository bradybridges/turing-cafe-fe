import React from 'react';
import './ReservationCard.css'

const ReservationCard = (props) => {
  return (
    <section className='resCard'>
      <h2>{props.name}</h2>
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Number of guests: {props.number}</p>
      <button id={props.id} className='resButton' onClick={props.cancelReservation}>Cancel</button>
    </section>
  );
};

export default ReservationCard;