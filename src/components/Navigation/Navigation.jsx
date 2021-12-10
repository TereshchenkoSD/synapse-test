import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Browse</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </nav>
  );
};

export default Navigation;
