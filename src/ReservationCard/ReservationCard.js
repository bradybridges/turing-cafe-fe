import React from 'react';
import './ReservationCard.css'

const ReservationCard = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of guests: {props.number}</p>
      <button id={props.id} onClick={props.cancelReservation}>Cancel</button>
    </>
  );
};

export default ReservationCard;