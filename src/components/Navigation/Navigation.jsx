import { NavLink } from 'react-router-dom';
import { NavLinkDefault, NavLinkActive } from './Navigation.styles';
import { NavContainer } from './Navigation.styles';

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink
        exact
        to="/"
        className={NavLinkDefault}
        activeClassName={NavLinkActive}
      >
        Browse
      </NavLink>
      <NavLink
        to="/register"
        className={NavLinkDefault}
        activeClassName={NavLinkActive}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={NavLinkDefault}
        activeClassName={NavLinkActive}
      >
        Sign In
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
