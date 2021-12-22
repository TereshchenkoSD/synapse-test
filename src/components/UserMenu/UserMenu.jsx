import {
  UserMenuContainer,
  UserAvatarWrapper,
  UserWelcomeText,
  UserLogOutBtn,
} from './UserMenu.styles';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserMenu = () => {
  return (
    <UserMenuContainer>
      <UserAvatarWrapper>
        <AccountCircleIcon />
      </UserAvatarWrapper>
      <UserWelcomeText>Welcome</UserWelcomeText>
      <UserLogOutBtn>
        <LogoutIcon />
        Log out
      </UserLogOutBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
