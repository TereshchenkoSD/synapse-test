import styled from '@emotion/styled/macro';
import bgHeader from '../../images/7.jpg';

export const Header = styled.header`
  position: relative;
  width: 100%;
  background: url(${bgHeader});
  background-size: cover;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid var(--text-color-main);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 26px 0 26px;
  }
`;
export const ButtonBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;
