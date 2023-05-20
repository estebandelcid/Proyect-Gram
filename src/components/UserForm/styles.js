import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 30px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  width: 90%;
  padding: 8px 4px;
  &[disabled] {
    opacity: 0.3;
  }
`;

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

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  margin-left: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 8px 0;
  margin: 0 20px;
`;

export const LogoPets = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 19px 0;

  & svg {
    fill: #f35f42;
  }
`;
export const Error = styled.span`
  color: red;
  margin: 0 25px;
  font-size: 1rem;
`;


