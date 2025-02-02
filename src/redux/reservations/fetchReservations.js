import { authHeader } from '../users/usersAPI';

const fetchReservations = async (username) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    `https://sleepy-ridge-33847.herokuapp.com/api/v1/users/${username}/reservations`,
    requestOptions,
  );
  const result = await response.json();
  return result;
};

export default fetchReservations;
