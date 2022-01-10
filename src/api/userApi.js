import {
  onLocalStorageSave,
  onLocalStorageRemove,
  onLocalStorageRead,
} from '../utils/localStorageFunction';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3080';

export const fetchUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const registerUser = async user => {
  try {
    const allUsers = await fetchUsers();
    const isExistingUser = allUsers.find(({ email }) => email === user.email);
    if (isExistingUser) {
      console.log('User is already exists');
      return;
    }
    await axios.post('/users', user);
  } catch (error) {
    console.log(error.mesage);
  }
};

export const loginUser = async user => {
  try {
    const allUsers = await fetchUsers();
    const isExistingUser = allUsers.find(
      ({ email, password }) =>
        email === user.email && password === user.password,
    );

    if (!isExistingUser) {
      console.log("Such user doesn't exist");
      return;
    }
    const { data } = await axios.get(`/users?email=${user.email}`);
    const { email } = data[0];
    console.log(data);
    onLocalStorageSave('loggedUser', { email });
    return data[0];
  } catch (error) {
    console.log(error.mesage);
  }
};

export const logoutUser = async user => {};
