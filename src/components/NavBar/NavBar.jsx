import { Header, HeaderContainer } from './NavBar.styles';
import logo from '../../images/cinema_projector.png';
import Button from '../Button';

const NavBar = () => {
  return (
    <Header>
      <HeaderContainer>
        <a href="/" aria-label="app logo">
          <img src={logo} alt="logo" width="90" height="34" />
        </a>
        <Button
          text={'Sign up'}
          type={'submit'}
          onClick={() => console.log('sign up button clicked')}
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
      </HeaderContainer>
    </Header>
  );
};

export default NavBar;
