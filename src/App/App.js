import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../apiCalls';
import ReservationCard from '../ReservationCard/ReservationCard';

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


  render() {

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.reservations.map(res => <ReservationCard name={res.name} date={res.date} time={res.time} number={res.number} id={res.id} />)}
        </div>
      </div>
    )
  }
}

export default App;
