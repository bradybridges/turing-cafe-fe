import React from 'react';
import './ReservationCard.css'

const ReservationCard = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of guests: {props.number}</p>
      <button>Cancel</button>
    </>
  );
};

export default ReservationCard;