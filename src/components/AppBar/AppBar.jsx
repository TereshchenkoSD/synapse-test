import { useState, useEffect, useContext } from 'react';
import { Header, HeaderContainer } from './AppBar.styles';
import logo from '../../images/cinema_projector.png';
// import Button from '../Button';
// import Modal from '../Modal';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import context from '../../context/authContext';

const AppBar = () => {
  const { currentUser } = useContext(context);
  return (
    <Header>
      <HeaderContainer>
        <a href="/" aria-label="app logo">
          <img src={logo} alt="logo" width="90" height="34" />
        </a>

        {currentUser ? <UserMenu /> : <Navigation />}
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
