import { useState, useEffect } from 'react';
import { Header, HeaderContainer } from './AppBar.styles';
import logo from '../../images/cinema_projector.png';
// import Button from '../Button';
// import Modal from '../Modal';
import Navigation from '../Navigation';

const AppBar = () => {
  return (
    <Header>
      <HeaderContainer>
        <a href="/" aria-label="app logo">
          <img src={logo} alt="logo" width="90" height="34" />
        </a>

        <Navigation />
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
