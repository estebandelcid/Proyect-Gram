import styled from 'styled-components';

export const Button = styled.button`
  background-color: #c43981;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  width: 90%;
  text-align: center;
  &[disabled] {
    opacity: 30%;
  }
`;
