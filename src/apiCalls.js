export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then( resp => resp.json());
}

export const insertReservation = reservation => {
  const options = {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: { 'Content-Type': 'application/json' }
  }
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(resp => resp.json());

}

export const removeReservation = id => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(resp => resp.json());
}