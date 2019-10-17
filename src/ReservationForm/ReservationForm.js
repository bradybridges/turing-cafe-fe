import React, { Component } from 'react';
import './ReservationForm.css'

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
    }
  }

  updateReservationDetails = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(e.target.name === 'number') {
      this.setState({number: Number(e.target.value)})
    }
  }

  isFormComplete = () => {
    const isNameGood = this.state.name !== '';
    const isDateGood = this.state.date !== '';
    const isTimeGood = this.state.time !== '';
    const isNumberGood = this.state.number !== 0;

    if(isNameGood && isDateGood && isTimeGood && isNumberGood) {
      return true;
    } else {
      return false;
    }
  }

  makeReservation = (e) => {
    e.preventDefault();
    const reservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    };
    this.props.addReservation(reservation);
  }

  render() {
    return (
      <form>
        <input 
          onChange={this.updateReservationDetails} 
          type='text' 
          placeholder='Name' 
          name='name'
        />
        <input 
          onChange={this.updateReservationDetails} 
          type='text' 
          placeholder='Date (mm/dd)' 
          name='date'
        />
        <input 
          onChange={this.updateReservationDetails} 
          type='text' 
          placeholder='Time' 
          name='time'
        />
        <input 
          onChange={this.updateReservationDetails} 
          type='text' 
          placeholder='Number of guests'
          name='number' 
        />
        {!this.isFormComplete() && <button disabled>Make Reservation</button>}
        {this.isFormComplete() && <button onClick={this.makeReservation} >Make Reservation</button>}
      </form>
    );
  }
}

export default ReservationForm;