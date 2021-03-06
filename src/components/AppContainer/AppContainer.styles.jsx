import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 75px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;
