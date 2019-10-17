import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  const mockReservations = [
    {date: '12/22', id: 1, name: 'Brady', number: 2, time: '8:00'},
    {date: '12/23', id: 2, name: 'Randy', number: 5, time: '5:00'}
  ];

  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.setState({reservations: mockReservations});

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  
});

