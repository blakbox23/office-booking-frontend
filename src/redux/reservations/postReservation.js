import { authHeader } from '../users/usersAPI';

const postReservation = async (username, data) => {
  const request = await fetch(`https://sleepy-ridge-33847.herokuapp.com/api/v1/users/${username}/reservations`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: authHeader(),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  const response = await request.json();
  return response;
};

export default postReservation;
