import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('ReservationCard', () => {
  let wrapper = shallow( <ReservationCard 
    name='brady' 
    date='10/22' 
    time='10:30'
    number={10}
    id={1}
  /> );
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});