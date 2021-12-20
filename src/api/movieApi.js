import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3080';

export const fetchMovies = async () => {
  const { data } = await axios.get('/movies');
  console.log(data);
};
