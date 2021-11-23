import PropTypes from 'prop-types';

import { Button } from './Button.styles';

const NavButton = ({ onClick }) => {
  return (
    <Button type="submit" onClick={onClick}>
      Load more
    </Button>
  );
};

NavButton.defaultProps = {
  onClick: () => null,
};

NavButton.propTypes = {
  onClick: PropTypes.func,
};

export default NavButton;
