import React, { Component } from 'react';
import './App.css';
import { fetchReservations, insertReservation, removeReservation } from '../apiCalls';
import ReservationCard from '../ReservationCard/ReservationCard';
import ReservationForm from '../ReservationForm/ReservationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetchReservations()
      .then( reservations => {
        this.setState({ reservations });
        console.log(reservations);
      })
  }

  addReservation = reservation => {
    insertReservation(reservation)
    .then( data => {
      console.log(data)
      this.setState({ reservations: [...this.state.reservations, reservation]});
    });
  }

  cancelReservation = e => {
    const id = e.target.id;
    removeReservation(id)
      .then(resp => {
        const reservations = this.state.reservations.filter(res => res.id !== Number(id));
        this.setState({ reservations });
      });
  }

  returnReservations = () => {
    return this.state.reservations.map((res, i) => {
      return <ReservationCard 
        name={res.name} 
        date={res.date} 
        time={res.time} 
        number={res.number} 
        id={res.id} 
        key={i}
        cancelReservation={this.cancelReservation}
      />
    });
  }


  render() {

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          {this.returnReservations()}
        </div>
      </div>
    )
  }
}

export default App;
