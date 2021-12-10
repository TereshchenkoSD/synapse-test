import { useState, useEffect } from 'react';
import { Header, HeaderContainer, ButtonBlockContainer } from './AppBar.styles';
import logo from '../../images/cinema_projector.png';
import Button from '../Button';
// import Modal from '../Modal';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Header>
      <HeaderContainer>
        <a href="/" aria-label="app logo">
          <img src={logo} alt="logo" width="90" height="34" />
        </a>

        <ButtonBlockContainer>
          <Button
            text={'Sign up'}
            type={'submit'}
            onClick={() => setIsOpen(true)}
          />
          <Button
            text={'Sign in'}
            type={'submit'}
            onClick={() => console.log('sign in button clicked')}
          />
          <Button
            text={'Browse'}
            type={'button'}
            onClick={() => console.log('browse button clicked')}
          />
        </ButtonBlockContainer>
      </HeaderContainer>
      {/* {isOpen && <Modal onClose={() => setIsOpen(false)} />} */}
    </Header>
  );
};

export default AppBar;
