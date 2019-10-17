export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then( resp => resp.json());
}