import {fetchReservations, insertReservation} from './apiCalls';
import React from 'react';
import { shallow } from 'enzyme'

describe('fetchReservations', () => {
  it('should get back array of reservations from fetchReservations', () => {
    const expected = {name: 'brady', time:'10:30', date: '10/22', number: 2};
    window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({ json: () => [expected]});
  });

  expect(fetchReservations()).resolves.toEqual([expected]);
  expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/reservations");
  });
});

describe('insertReservation', () => {
  const expectedReturn = {name: 'Brady', time:'10:30', date:'10/22', number: 1, id: 1};
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({ json: () => expected});
  });

  it('fetch should be called with correct url and options', () => {
    window.fetch.mockClear();
    insertReservation(expectedReturn);
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/reservations", {"body": "{\"name\":\"Brady\",\"time\":\"10:30\",\"date\":\"10/22\",\"number\":1,\"id\":1}", "headers": {"Content-Type": "application/json"}, "method": "POST"});
  });
});
