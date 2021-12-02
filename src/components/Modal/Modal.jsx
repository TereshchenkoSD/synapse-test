import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect } from 'react';

import { Backdrop, Content, Title, CloseButton } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children, text }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <Title>{text}</Title>
        {children}
        <CloseButton type="button" onClick={onClose}>
          <CloseIcon sx={{ fontSize: 20 }} />
        </CloseButton>
      </Content>
    </Backdrop>,
    modalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
