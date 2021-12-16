import styled from '@emotion/styled/macro';

export const MovieGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const MovieGalleryItem = styled.li`
  margin-right: var(--card-set-gap);
  margin-bottom: var(--card-set-gap);
  flex-basis: calc((100% - 1 * var(--card-set-gap)) / 2);
  width: 605px;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

export const MoviePoster = styled.img`
  width: 605px;
  height: 398px;
  object-fit: cover;
  max-width: 100%;
`;

export const MovieTitle = styled.h3``;

export const MovieDescriptionBlock = styled.div``;

export const MovieDescrBlockItem = styled.li`
  display: flex;
  flex-direction: row;
`;

export const MovieDescriptionTitle = styled.p``;
