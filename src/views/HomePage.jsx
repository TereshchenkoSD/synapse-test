import Slider from '../components/Slider';
import MovieList from '../components/MovieList';

import movies from '../data/imdb.json';

const HomePage = () => {
  return (
    <>
      <Slider movies={movies} />
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
