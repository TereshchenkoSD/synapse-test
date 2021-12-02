import styled from '@emotion/styled/macro';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 194px;
  max-width: 380px;
  width: 100%;
  padding: 12px;
  background-color: var(--white-color);
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const Title = styled.p`
  text-align: center;
  color: var(--text-color-main);
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  cursor: pointer;
  background: transparent;
  border: transparent;
  width: 20px;
  height: 20px;

  transition-property: transform;
  transition-duration: var(--transition-function);
  transition-timing-function: var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: var(--accent-color-primary);
  }
`;
