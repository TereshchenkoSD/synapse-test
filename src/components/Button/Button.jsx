import PropTypes from 'prop-types';

import { Button } from './Button.styles';

const NavButton = ({ onClick, text, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

NavButton.defaultProps = {
  onClick: () => null,
};

NavButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default NavButton;
