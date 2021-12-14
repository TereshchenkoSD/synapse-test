import { css } from '@emotion/css';
import styled from '@emotion/styled/macro';

export const NavLinkDefault = css`
  text-decoration: none;
  color: var(--white-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.27;
  text-transform: uppercase;

  transition: color 300ms var(--timing-function);
  &:hover {
    color: var(--accent-color-primary);
  }
`;

export const NavLinkActive = css`
  color: var(--white-color);
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 260px;
  display: flex;
  justify-content: space-between;
`;
