import Slider from './components/Slider';

import movies from './data/imdb.json';

const HomePage = () => {
  return (
    <>
      <Slider movies={movies} />;
    </>
  );
};

export default HomePage;
