import styled from '@emotion/styled/macro';

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(33, 33, 33, 1);
  background-color: rgba(156, 156, 156, 1);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.875;
  letter-spacing: 0.06em;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(245, 244, 250, 1);
    background-color: rgba(33, 150, 243, 1);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
