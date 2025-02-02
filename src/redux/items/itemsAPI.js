import { authHeader } from '../users/usersAPI';

export const fetchAllItems = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    'https://sleepy-ridge-33847.herokuapp.com/api/v1/items',
    requestOptions,
  );
  const items = await response.json();
  return items;
};

export const fetchItemById = async (id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    `https://sleepy-ridge-33847.herokuapp.com/api/v1/items/${id}`,
    requestOptions,
  );
  const item = await response.json();
  return item;
};

export const deleteAndGetItems = async (itemId) => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    `https://sleepy-ridge-33847.herokuapp.com/api/v1/items/${itemId}`,
    requestOptions,
  );
  const data = await response.json();
  return data;
};

export const postItem = async (item) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: {
      Authorization: `Bearer ${user.token}`,
      accepts: 'application/json',
    },
    body: item,
  };
  const response = await fetch(
    'https://sleepy-ridge-33847.herokuapp.com/api/v1/items',
    requestOptions,
  );
  const data = await response.json();
  return data;
};
