import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReservationForm from './ReservationForm';

describe('ReservationForm', () => {
  let wrapper;
  const mockAddReservation = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<ReservationForm addReservation={mockAddReservation} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('udpateReservationDetails', () => {
    it('updateReservationDetails should update the state of the component corresponding to the input that has changed', () =>{
      const mockEvent = {
        target: {name: 'name', value: 'Brady'}
      };
      wrapper.instance().updateReservationDetails(mockEvent);
      expect(wrapper.state('name')).toEqual('Brady');
    });

    it('should parse an int from input if the name of input is number and update state', () => {
      const mockEvent = {
        target: {name: 'number', value: '10'}
      }
      wrapper.instance().updateReservationDetails(mockEvent);
      expect(wrapper.state('number')).toEqual(10);
    });
  });

  it('should not make a reservation if the form is incomplete', () => {
    wrapper.instance().makeReservation = jest.fn();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().makeReservation).not.toHaveBeenCalled();
    expect(mockAddReservation).not.toHaveBeenCalled();
  });

  it('should make a reservation and call addReservation correct info when form ios complete', () => {
    const expected = {
      name: 'Brady',
      date: '10/22',
      time: '10:30',
      number: '10'
    }
    wrapper.setState(expected);
    const mockEvent = {
      preventDefault: jest.fn()
    }
    wrapper.find('button').simulate('click', mockEvent);
    expect(mockAddReservation).toHaveBeenCalledWith(expected);
  });




});