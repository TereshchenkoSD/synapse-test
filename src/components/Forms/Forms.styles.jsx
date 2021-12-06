import styled from '@emotion/styled/macro';

export const Wrap = styled.div`
  display: flex;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding: 40px 29px 53px 29px;
  font-weight: 400;
  font-size: 10px;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: 400;
  font-size: 10px;
  line-height: 0.85;
  letter-spacing: 0.04em;
  margin-top: 24px;
  margin-bottom: 12px;
  color: var(--black-color);
`;

export const Field = styled.input`
  width: 253px;
  padding: 17px 20px;
  border: 1px solid transparent;
  background: var(--bg-color);
  border-radius: 30px;
  outline: none;

  &::placeholder {
    color: #a6abb9;
  }

  &:hover,
  &:focus {
    border: 1px solid var(--accent-color-primary);
  }
`;

export const FieldWrap = styled.div`
  margin-bottom: 40px;
`;

export const Errors = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 0.85;
  letter-spacing: 0.04em;
  margin-top: 5px;
  color: var(--accent-color-primary);
`;

// @media screen and (min-width: 768px) {
//   .wrap {
//     width: 436px;
//     padding: 50px 85px 55px 85px;
//   }

//   .text {
//     width: auto;
//     font-size: 12px;
//     text-align: start;
//   }

//   .label {
//     font-size: 12px;
//     margin-top: 20px;
//     margin-bottom: 10px;
//     color: var(--black-color);
//   }

//   .field {
//     width: 265px;
//     font-size: 14px;
//   }
// }
