import {
  MovieGallery,
  MovieGalleryItem,
  MoviePoster,
  MovieTitle,
  MovieDescriptionBlock,
  MovieDescrBlockItem,
  MovieDescriptionTitle,
} from './MovieList.styles';

const MovieList = ({ movies, onSelect }) => {
  return (
    <MovieGallery>
      {movies.map(({ id, title, genre, director, year, poster }) => (
        <MovieGalleryItem key={id}>
          <MoviePoster src={poster} alt={title} />
          <MovieTitle>{title}</MovieTitle>
          <MovieDescriptionBlock>
            <ul>
              <MovieDescrBlockItem>
                <MovieDescriptionTitle>Genre:</MovieDescriptionTitle>
                <span>{genre}</span>
              </MovieDescrBlockItem>
              <MovieDescrBlockItem>
                <MovieDescriptionTitle>Director:</MovieDescriptionTitle>
                <span>{director}</span>
              </MovieDescrBlockItem>
              <MovieDescrBlockItem>
                <MovieDescriptionTitle>Year:</MovieDescriptionTitle>
                <span>{year}</span>
              </MovieDescrBlockItem>
            </ul>
          </MovieDescriptionBlock>
        </MovieGalleryItem>
      ))}
    </MovieGallery>
  );
};

export default MovieList;
